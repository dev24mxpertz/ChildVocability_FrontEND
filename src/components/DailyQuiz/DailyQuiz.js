import React, { useEffect, useState } from "react";
import "./DailyQuiz.css";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import {
  Fetch_Daily_Quiz_Data,
  Get_Weekly_Performance_of_Student_All,
} from "../../store/Actions/DailyQuizActions";

const DailyQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const id = user._id;
  const wrongQuestions = useSelector((state) => state.DailyQuiz.WrongQuestions);

  useEffect(() => {
    dispatch(Get_Weekly_Performance_of_Student_All(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("wrongQuestions updated:", wrongQuestions);
    if (wrongQuestions.length > 0) {
      const slicedQuestions =
        wrongQuestions.length > 10
          ? wrongQuestions.slice(0, 10)
          : wrongQuestions;
      console.log("slicedQuestions:", slicedQuestions);
      setQuestions(slicedQuestions);
      console.log("Questions ", questions);
    }
  }, [wrongQuestions]);

  const handleAnswerOptionClick = (selectedOption) => {
    const updatedUserAnswers = [...userAnswers];
    console.log(selectedOption);
    updatedUserAnswers[currentQuestionIndex] = selectedOption;
    console.log("Updated User Answers:", updatedUserAnswers); // Log the updated user answers
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextButtonClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevButtonClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const calculateScore = () => {
    let newScore = 0;
    const updatedQuestions = questions.filter((question, index) => {
      if (userAnswers[index] === question.answer) {
        newScore++;
        return false; // Exclude the correct question from the updated questions array
      }
      return true; // Keep incorrect questions in the updated questions array
    });

    setQuestions(updatedQuestions);
    setScore(newScore);
    setShowScore(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("----DISPATCH");
    const updatedQuestions = questions.filter((question, index) => {
      if (userAnswers[index] === question.answer) {
        return false; // Exclude the correct question from the updated questions array
      }
      return true; // Keep incorrect questions in the updated questions array
    });
    const CorrectQuestions = questions.filter((question,index) => {
      if (userAnswers[index] === question.answer) {
        return true; // Exclude the correct question from the updated questions array
      }
      return false; // Keep incorrect questions in the updated questions array
    })

    console.log(CorrectQuestions)

    dispatch(
      Fetch_Daily_Quiz_Data({
        id: user._id,
        WrongQuestions: updatedQuestions,
        CorrectQuestions: CorrectQuestions
      })
    );
  };

  return (
    <div className="mainbox">
      <div className="headerdiv">
        <Header />
      </div>
      <div className="Stories-body">
        <div className="storiesnadbutton">
          <div>
            <h4 style={{ fontWeight: 800 }}>Daily Quiz</h4>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              boxShadow:
                "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
            className="flex-column p-3 justify-content-center align-item-center"
          >
            {!showScore && (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestionIndex + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions.length > 0 &&
                      `${currentQuestionIndex + 1}. ${
                        questions[currentQuestionIndex].question
                      }`}
                  </div>
                </div>
                <div className="answer-section">
                  {questions.length > 0 &&
                    questions[currentQuestionIndex].options.map(
                      (option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleAnswerOptionClick(option)}
                          className={`${
                            userAnswers[currentQuestionIndex] === option
                              ? "selected"
                              : ""
                          }`}
                        >
                          {option}
                        </button>
                      )
                    )}
                </div>
                <div className="navigation-buttons">
                  {currentQuestionIndex > 0 && (
                    <button
                      className="btn btn-outline-primary mx-1"
                      type="button"
                      onClick={handlePrevButtonClick}
                    >
                      <i className="bi bi-arrow-left-short mx-1"></i>
                      Previous
                    </button>
                  )}
                  {currentQuestionIndex < questions.length - 1 && (
                    <button
                      className="btn btn-outline-primary mx-1"
                      type="button"
                      onClick={handleNextButtonClick}
                    >
                      Next
                      <i className="bi bi-arrow-right-short mx-1"></i>
                    </button>
                  )}
                  {currentQuestionIndex === questions.length - 1 &&
                    (userAnswers?.length > 0 ? (
                      <button
                        type="button"
                        className="btn btn-outline-primary mx-1"
                        onClick={calculateScore}
                      >
                        Show Score
                      </button>
                    ) : null)}
                </div>
              </>
            )}
            {showScore && (
              <div className="score-section">
                <p>
                  Final Score:
                  <span style={{ color: "green", marginLeft: "10px" }}>
                    {score}
                  </span>{" "}
                </p>
                <p>
                  Correct Answers:
                  <span style={{ color: "green", marginLeft: "10px" }}>
                    {score}
                  </span>{" "}
                </p>
                <p>
                  Wrong Answers:
                  <span style={{ color: "red", marginLeft: "10px" }}>
                    {questions.length - score}
                  </span>{" "}
                </p>
                <button className="btn btn-outline-success" type="submit">
                  Submit the Score PLease
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DailyQuiz;
