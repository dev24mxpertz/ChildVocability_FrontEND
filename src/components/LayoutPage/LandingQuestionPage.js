import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "1. What is Brainy Lingo?",
    answer:
      " Brainy Lingo is an innovative web-based vocabulary learning app designed by parents and educators for students preparing for the 11 Plus exam. It uses interactive exercises, storytelling, and scientifically-backed learning techniques to make vocabulary building engaging, fun, and effective.",
  },
  {
    id: 2,
    question: "2. What scientific principles does Brainy Lingo use to enhance vocabulary learning?",
    answer:
      "Brainy Lingo is grounded in proven cognitive science principles, notably spaced repetition for improved long-term memory retention and imagery for enhanced recall. These methods are supported by extensive research, including studies endorsed by the British Council and findings from cognitive psychologists like Marisa T. Cohen and Helen L. Johnson.",
  },
  {
    id: 3,
    question: "3. How does Brainy Lingo work?",
    answer:
      "Students learn vocabulary through daily interactive exercises, including drag-and-drop activities and reading stories crafted with the words they've learned. Assessments on meanings, synonyms, and antonyms help check understanding, while spaced repetition algorithms ensure long-term retention. A leaderboard motivates students to practice regularly.",
  },
  {
    id: 4,
    question: "4. Who can benefit from Brainy Lingo?",
    answer:
      "Any student preparing for the 11 Plus exam looking for an engaging and effective way to improve their vocabulary can benefit from Brainy Lingo. It's also a valuable tool for parents and tutors seeking to support their children's learning journey.",
  },
  {
    id: 5,
    question: "5. Is there a trial period?",
    answer:
      "Yes, Brainy Lingo offers a 7-day free trial for all new users. This allows you to explore the full range of features and see the impact on your vocabulary learning before committing to a subscription.",
  },
  {
    id: 6,
    question: "6. Can I use Brainy Lingo on my mobile device?",
    answer:
      "While Brainy Lingo is currently optimized for use on laptops and desktops via web browsers for the best learning experience, it is accessible on mobile browsers. We are planning to develop a mobile app in the future to provide even greater accessibility.",
  },
  {
    id: 7,
    question: "7. What genres do the stories cover?",
    answer:
      "Our stories span various genres, including Fantasy, Adventure, Mystery, Science Fiction, Sports Stories, and Historical Fiction, to cater to diverse interests and make learning more enjoyable.",
  },
  {
    id: 8,
    question: "8. How does the leaderboard work?",
    answer:
      "The leaderboard displays rankings of children based on the number of words learned and exercises completed, encouraging friendly competition and motivating students to practice more.",
  },
  {
    id: 9,
    question: "9. Does using Brainy Lingo guarantee success in the 11 Plus exam?",
    answer:
      "Brainy Lingo uses science-based methods to boost vocabulary learning for the 11 Plus exam, but cannot guarantee exam success. Exam outcomes depend on individual effort and application. Our app aims to enhance crucial vocabulary skills and support students in reaching their full potential.",
  },
];

const LandingQuestionPage = () => {
  const [questionStates, setQuestionStates] = useState(
    Array(questions.length).fill(false)
  );

  const toggleVisibility = (index) => {
    const newQuestionStates = [...questionStates];
    newQuestionStates[index] = !newQuestionStates[index];
    setQuestionStates(newQuestionStates);
  };

  return (
    <div>
    <div className="LandingBanner_lower_div">
    <h2>Frequently Asked Questions</h2>
  </div>
  <div id="FAQ" className="LandingQuestionPage">
      {questions.map(({ id, question, answer }, index) => (
        <div className="LandingQuestionPage_box" key={id}>
          <div className="LandingQuestionPage_box_upper">
            <h4>{question}</h4>
            <NavLink>
              <div
                style={{ width: "50px", borderRadius: "5px" }}
                onClick={() => toggleVisibility(index)}
                className={`p-2 ${
                  questionStates[index] ? "bg-primary" : "bg-secondary"
                }`}
              >
                <i
                  style={{ color: "white" }}
                  className={`bi ${
                    questionStates[index] ? "bi-dash" : "bi-plus-lg fs-5"
                  }`}
                ></i>
              </div>
            </NavLink>
          </div>
          <div className="LandingQuestionPage_box_lower">
            {questionStates[index] && (
              <div className="w-100 d-flex p-2">
                <p className="fs-5 text-start p-2">{answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default LandingQuestionPage;
