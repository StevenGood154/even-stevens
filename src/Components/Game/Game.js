import React from "react";
import Question from "./Question";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestionsByCategory } from "../../Services/QuestionsService";
import "./Game.css";

const Game = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  // Gets questions from backend database
  useEffect(() => {
    getQuestionsByCategory(category).then((questions) => {
      setQuestions(questions);
    });
  }, [category]);

  // When a button with the right answer is clicked
  function onQuestionRight(e) {
    e.target.className = "correctButton";
    console.log("Good Job!");
    setTimeout(() => setQuestionNumber(questionNumber + 1), 250);
    setScore(score + 1);
  }

  // When a button with the wrong answer is clicked
  function onQuestionWrong(e) {
    e.target.className = "incorrectButton";
    console.log("Too Bad!");
    setTimeout(() => setQuestionNumber(questionNumber + 1), 1500);
  }


  return (
    <div>
      <Link to="/stats">View User Stats</Link>
      <h2>Score: {score}</h2>
        {questions.length > 0 && (
          <Question 
            questionText={questions[questionNumber].get("question")}
            answers={[...questions[questionNumber].get("incorrect_answers"), questions[questionNumber].get("correct_answer")]}
            correctAnswer={questions[questionNumber].get("correct_answer")}
            onQuestionRight={onQuestionRight}
            onQuestionWrong={onQuestionWrong}
          />
        )}
    </div>
  );
};

export default Game;
