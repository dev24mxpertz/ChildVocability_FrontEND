import React, { useState } from 'react';
import '../../components/css/Quest.css';
import { useSelector } from 'react-redux';

const Sciencewordstoryinnertab = () => {
  const data = useSelector((state) => state.Story.DetailData);
  const [questionStates, setQuestionStates] = useState(Array(data?.Brainquest?.length).fill({ selectedAnswer: null, isCorrect: null }));

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    const correctAnswer = data?.Brainquest[questionIndex]?.Answer;
    const isCorrect = selectedAnswer === correctAnswer;

    setQuestionStates(prevStates => {
      const newStates = [...prevStates];
      newStates[questionIndex] = { selectedAnswer, isCorrect };
      return newStates;
    });
  };

  const allQuestionsAnswered = questionStates.every(state => state.selectedAnswer !== null);

  const handleSubmit = () => {
    if (allQuestionsAnswered) {
      const selectedAnswers = questionStates.map((state, index) => ({
        questionNumber: index + 1,
        selectedAnswer: state.selectedAnswer
      }));

      // Send selectedAnswers to the backend
      console.log(selectedAnswers); // Replace with your API call to send data to the backend
    } else {
      console.log("Please answer all questions before submitting.");
      alert('Please answer all questions before submitting.')
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start", padding: "10px" }}>
        {data?.Brainquest?.map((question, questionIndex) => (
          <div key={questionIndex} style={{ marginTop: '20px', marginBottom: '20px' }}>
            <p style={{textAlign:"start"}}>{`Q${questionIndex + 1}. `} {/* Adding question number */}
              {Array.isArray(question?.Question) ? (
                question.Question?.map((q, i) => <span key={i}>{q}</span>)
              ) : (
                <span>{question.Question}</span>
              )}
            </p>
            {question.Option?.map((option, optionIndex) => (
              <div key={optionIndex} style={{ marginBottom: '10px', display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", color: questionStates[questionIndex]?.isCorrect === true && option === data?.Brainquest[questionIndex]?.Answer ? '#3498db' : questionStates[questionIndex]?.isCorrect === false && option === questionStates[questionIndex]?.selectedAnswer ? '#3498db' : 'inherit' }}>
                <label style={{ marginRight: '10px' }}>
                  <input style={{ marginRight: '10px' }}
                    type="radio"
                    value={option}
                    checked={option === questionStates[questionIndex]?.selectedAnswer}
                    onChange={() => handleAnswerSelection(questionIndex, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit} className='btn btn-outline-success' disabled={!allQuestionsAnswered}>Submit Answers</button>
      </div>
    </div>
  );
};

export default Sciencewordstoryinnertab;
