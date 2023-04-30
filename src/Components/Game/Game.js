import React from "react";
import Question from "./Question";
import Timer from "./Timer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestionsByCategory } from "../../Services/QuestionsService";
import { logoutUser, updateHighScore } from "../../Services/StatsService";
import { updateStats } from "../../Services/StatsService";
import "./Game.css";

const Game = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  // const [questionNumber, setQuestionNumber] = useState(0);
  // const [score, setScore] = useState(0);
  const [data, setData] = useState([0, 0]);
  const navigate = useNavigate();

  // Gets questions from backend database
  useEffect(() => {
    getQuestionsByCategory(category).then((questions) => {
      // Shuffle Questions
      setQuestions(questions.sort(() => Math.random() - 0.5));
      console.log("Number of questions:", questions.length);
    });
  }, [category]);

  // When a button with the right answer is clicked
  function onQuestionRight(e) {
    e.target.className = "correctButton";
    console.log("Good Job!");
    updateStats(true, questions[data[0]].get('category'));
    setTimeout(() => setData([data[0] + 1, data[1] + 1]), 250);
  }

  // When a button with the wrong answer is clicked
  function onQuestionWrong(e) {
    e.target.className = "incorrectButton";
    console.log("Too Bad!");
    updateStats(false, questions[data[0]].get('category'));
    setTimeout(() => setData([data[0] + 1, data[1]]), 1500);
  }

  function onTimerExpire() {
    console.log("GAME OVER");
    updateHighScore(data[1]);
    navigate('/select');
  }

  function onLogoutUser() {
    logoutUser();
    navigate('/');
  }



  return (
    <div className="gameBox">
      <button className="gameButton" onClick={() => navigate('/select')}>Select Category</button>
      <button className="gameButton" onClick={() => navigate('/stats')}>View User Stats</button>
      <button className="gameButton" onClick={onLogoutUser}>Log Out</button>
      <h2>Score: {data[1]}</h2>
      <Timer onTimerExpire={onTimerExpire}></Timer>
        {questions.length > 0 && (
          <Question 
            questionText={questions[data[0]].get("question")}
            answers={[...questions[data[0]].get("incorrect_answers"), questions[data[0]].get("correct_answer")]}
            correctAnswer={questions[data[0]].get("correct_answer")}
            onQuestionRight={onQuestionRight}
            onQuestionWrong={onQuestionWrong}
          />
        )}
    </div>
  );
};

export default Game;
