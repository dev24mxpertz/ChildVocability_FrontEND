import React, { useState } from 'react';
import '../../components/css/Quest.css';
import { useSelector } from 'react-redux';  


const Historywordstoryinnertab = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const data = useSelector((state) => state.Story.DetailData);
  
    const handleAnswerSelection = (option) => {
      setSelectedAnswer(option);
    };
  
    const checkAnswer = (correctAnswer) => {
      // console.log(correctAnswer)
      if (selectedAnswer === correctAnswer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    };
  
    return (
      <div>
        {data?.Brainquest.map((question, questionIndex) => (
          <div key={questionIndex} style={{ marginTop: '20px', marginBottom: '20px' }}>
            {Array.isArray(question?.Question) ? (
              question.Question.map((q, i) => <span key={i}>{q}</span>)
            ) : (
              <span>{question.Question}</span>
            )}
            <ul>
              {question.Option.map((option, index) => (
                <li
                  key={index}
                  className={index === selectedAnswer ? 'selected' : ''}
                  onClick={() => handleAnswerSelection(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
           
              <button  onClick={() => checkAnswer(question?.Answer)}>
                Check Answer
              </button>
     
            {isCorrect !== null && (
              <p className='inco'>{isCorrect ? 'Correct!' : 'Incorrect. Try again.'}</p>
            )}
          </div>
        ))}
      </div>
    );
}

export default Historywordstoryinnertab