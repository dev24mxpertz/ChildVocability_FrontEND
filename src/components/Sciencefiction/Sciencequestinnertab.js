import React, { useEffect, useState } from "react";
import "../../components/css/Quest.css";
import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';
import {
  Create_Weekly_Quiz,
  Get_Weekly_Quiz_By_StudentID,
  Update_Weekly_Quiz,
} from "../../store/Actions/weeklyActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sciencewordstoryinnertab = () => {
  const navigate = useNavigate()
  const data = useSelector((state) => state.Story.DetailData);
  const title = data.Title
  // const WeeklyData = useSelector((state)=> state.WeeklyQuiz.Questions)
  // console.log(WeeklyData)
  const Questions_of_Student = useSelector(
    (state) => state.WeeklyQuiz.Questions_of_Student
  );
  // console.log(Questions_of_Student);
  const WeeklyQuizid = Questions_of_Student?._id;
  // console.log(WeeklyQuizid)
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const id = user._id;

  // console.log(id)
  const [questionStates, setQuestionStates] = useState(
    Array(data?.Brainquest?.length).fill({
      selectedAnswer: null,
      isCorrect: null,
    })
  );
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

  const [submitting, setSubmitting] = useState(false); // State to track form submission

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    const correctAnswer = data?.Brainquest[questionIndex]?.Answer;
    const isCorrect = selectedAnswer === correctAnswer;

    setQuestionStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[questionIndex] = { selectedAnswer, isCorrect };
      return newStates;
    });
  };
  useEffect(() => {
    dispatch(Get_Weekly_Quiz_By_StudentID({id,Title:title}));
  }, [data]);

  const allQuestionsAnswered = questionStates.every(
    (state) => state.selectedAnswer !== null
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (allQuestionsAnswered && !submitting) {
      setSubmitting(true); // Start form submission
      const selectedAnswers = questionStates.map((state, index) => ({
        questionNumber: index + 1,
        selectedAnswer: state.selectedAnswer,
        isCorrect: state.isCorrect,
        question: data?.Brainquest[index]?.Question,
        options: data?.Brainquest[index]?.Option,
        answer: data?.Brainquest[index]?.Answer,
        questionId: data?.Brainquest[index]?.id,
      }));
      // console.log(selectedAnswers);
      // Calculate correct and wrong answer counts
      const correctCount = selectedAnswers.filter(
        (answer) => answer.isCorrect
      ).length;
      const wrongCount = selectedAnswers.filter(
        (answer) => !answer.isCorrect
      ).length;

      setCorrectAnswerCount(correctCount);
      setWrongAnswerCount(wrongCount);
        
      const formData = {
        StudentId: user?._id, // Provide the StudentId here
        Weekstartingdate: new Date(), // Provide the Weekstartingdate here
        Weeksensigndate: new Date(), // Provide the Weekstartingdate here
        QuestionsCorrectCount: correctCount,
        QuestionsWrongCount: wrongCount,
        TotalquestionsattemptedCount: correctCount + wrongCount,
        QuestionsWrong: selectedAnswers.filter((answer) => !answer.isCorrect),
        QuestionsCorrect: selectedAnswers.filter((answer) => answer.isCorrect),
        Title: title,
      };

      if (!Questions_of_Student) {
        await dispatch(
          Create_Weekly_Quiz({
            formData,
          })
        )
      toast.success("You gave Created Your DailyQuiz")
      } else {
        await dispatch(
          Update_Weekly_Quiz({
            formData,
            WeeklyQuizid,
          })
        );
        await toast.success("You gave Upated Your DailyQuiz")
      }

      setSubmitting(false); // Reset submitting state
      navigate("/Science")
     
    } else {
      console.log("Please answer all questions before submitting.");
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Your existing code for rendering questions */}
          {data?.Brainquest?.map((question, questionIndex) => (
            <div
              key={questionIndex}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <p style={{ textAlign: "start" }}>
                {`Q${questionIndex + 1}. `} {/* Adding question number */}
                {Array.isArray(question?.Question) ? (
                  question.Question?.map((q, i) => <span key={i}>{q}</span>)
                ) : (
                  <span>{question.Question}</span>
                )}
              </p>
              {question.Option?.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    color:
                      questionStates[questionIndex]?.isCorrect === true &&
                      option === data?.Brainquest[questionIndex]?.Answer
                        ? "#3498db"
                        : questionStates[questionIndex]?.isCorrect === false &&
                          option ===
                            questionStates[questionIndex]?.selectedAnswer
                        ? "#3498db"
                        : "inherit",
                  }}
                >
                  <label style={{ marginRight: "10px" }}>
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      value={option}
                      checked={
                        option === questionStates[questionIndex]?.selectedAnswer
                      }
                      onChange={() =>
                        handleAnswerSelection(questionIndex, option)
                      }
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="btn btn-outline-success"
            disabled={!allQuestionsAnswered || submitting}
          >
            Submit Answers
          </button>
          <p>Correct Answers: {correctAnswerCount}</p>
          <p>Wrong Answers: {wrongAnswerCount}</p>
        </form>
      </div>
    </div>
  );
};

export default Sciencewordstoryinnertab;
