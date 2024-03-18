import React, { useEffect } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllUsers } from "../../store/Actions/DailyQuizActions";

const LeaderBoard = () => {
  const AllUsers = useSelector((state) => state.DailyQuiz.AllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAllUsers());
  }, []);

  return (
    <div className="mainbox">
      <div className="headerdiv">
        <Header />
      </div>
      <div className="Stories-body ">
        <div className="storiesnadbutton">
          <div>
            <h4 style={{ fontWeight: 800 }}>Leader Board</h4>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
          className="p-3"
        >
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>All Attempted Questions</th>
                <th>All Correct Answers</th>
                <th>All Wrong Answers</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers.map((user, index) => {
                let totalAttemptedQuestion = 0;
                let totalCorrectAnswer = 0;
                let totalWrongAnswer = 0;

                user.Daily_Quiz.forEach((quiz) => {
                  totalAttemptedQuestion += quiz.Score.AttemptedQuestion;
                  totalCorrectAnswer += quiz.Score.Correct_Answer;
                  totalWrongAnswer += quiz.Score.Wrong_Answer;
                });

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.Username}</td>
                    <td>{user.Email}</td>
                    <td>{totalAttemptedQuestion}</td>
                    <td>{totalCorrectAnswer}</td>
                    <td>{totalWrongAnswer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
