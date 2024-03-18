import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Delete_Daily_Quiz_Question,
  fetch_All_Daily_Quiz_Questions,
} from "../../../store/Actions/DailyQuizActions";

const AdminDailyQuiz = () => {
  const Questions = useSelector(
    (state) => state.DailyQuiz.All_Daily_Quiz_Questions
  );
  // console.log(Questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_All_Daily_Quiz_Questions());
  }, [dispatch]);

  const DeleteHandler = (id) => {
    dispatch(Delete_Daily_Quiz_Question(id));
  };

  return (
    <div className="w-100 h-100 rounded-start-5 overflowdiv">
      <div className="d-flex justify-content-between align-items-center p-3">
        <h6 className="text-dark">Daily Quiz Question Table</h6>
        <Link
          to="/Admin/Admin-DailyQuiz/Add-DailyQuiz"
          className="btn btn-outline-success"
        >
          Add Daily Quiz
        </Link>
      </div>
      <div className="Meeting_list_style d-flex flex-wrap flex-row p-2">
        <table className="table table-hover table-responsive table-borderless">
          <thead>
            <tr>
              <th>Question Text</th>
              <th>Question Options</th>
              <th>Answer</th>
              <th>tag</th>
              <th>difficulty Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Questions.map((Question, index) => (
              <tr key={index}>
                <td>{Question.questionText}</td>
                <td>
                  {Question.options.map((option, optionindex) => (
                    <span key={optionindex}>
                      {`${option},`}
                      <br />
                    </span>
                  ))}
                </td>
                <td>{Question.answer}</td>
                <td>{Question.tag}</td>
                <td>{Question.difficultyLevel}</td>
                <td>
                  <Link
                    to={`/Admin/Admin-DailyQuiz/Admin-EDITDailyQuiz/${Question._id}`}
                    className="btn btn-primary btn-fontsize mx-1"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => DeleteHandler(Question._id)}
                    className="btn btn-outline-danger btn-fontsize"
                  >
                    Delete
                  </Link>
                  {/* You can add other action buttons as needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDailyQuiz;
