import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Get_Question_Data, Update_Question_Data } from "../../../store/Actions/DailyQuizActions";

const AdminEditDailyQuiz = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate()
  const currentQuestion = useSelector(
    (state) => state.DailyQuiz.Current_Question
  );
  const [formData, setFormData] = useState({
    questionText: "",
    options: ["", "", "", ""],
    answer: "",
    tag: "",
    difficultyLevel: "",
  });

  useEffect(() => {
    dispatch(Get_Question_Data(id));
  }, []);

  useEffect(() => {
    // console.log(currentQuestion)
    if (currentQuestion) {
        setFormData({
          questionText: currentQuestion.questionText || "",
          options: currentQuestion.options || ["", "", "", ""],
          answer: currentQuestion.answer || "",
          tag: currentQuestion.tag || "",
          difficultyLevel: currentQuestion.difficultyLevel || "",
        });
      }
  }, [currentQuestion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(Update_Question_Data({id,formData}))
    navigate("/Admin/Admin-DailyQuiz")
  };
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "options") {
      const updatedOptions = [...formData.options];
      updatedOptions[index] = value;
      setFormData({ ...formData, options: updatedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="w-100 h-100 rounded-start-5 overflowdiv  p-2">
      <h6 className="text-start mt-2 p-1">Daily Quiz Question</h6>
      <form onSubmit={handleSubmit}>
        <div className="mt-2 mx-1">
          <input
            type="text"
            className="form-control w-100"
            id="questionText"
            name="questionText"
            placeholder="Question Text"
            value={formData.questionText}
            onChange={handleChange}
            required
          />
          <div className="d-flex flex-wrap bg-light justify-content-between mt-2">
            {formData.options.map((option, index) => (
              <input
                key={index}
                type="text"
                className="form-control w-25 mx-1 my-1"
                id={`option-${index}`}
                name="options"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleChange(e, index)}
                required
              />
            ))}
          </div>
          <div className="mt-2 d-flex justify-content-between p-1">
            <input
              type="text"
              className="form-control w-25"
              id="answer"
              name="answer"
              placeholder="Answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="form-control w-25"
              id="tag"
              name="tag"
              placeholder="Tag"
              value={formData.tag}
              onChange={handleChange}
              required
            />
            <div className="form-control w-25">
              <label htmlFor="difficultyLevel">Select Difficulty Level</label>
              &nbsp;&nbsp;
              <select
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={(e) =>
                  setFormData({ ...formData, difficultyLevel: e.target.value })
                }
                required
              >
                <option value="">Select Difficulty Level</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-success mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminEditDailyQuiz;
