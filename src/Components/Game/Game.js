import React from "react";
import Question from "./Question";
import Timer from "./Timer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestionsByCategory } from "../../Services/QuestionsService";
import { updateHighScore } from "../../Services/StatsService";
import { updateStats } from "../../Services/StatsService";
import "./Game.css";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [questionButtonsEnabled, setQuestionButtonsEnabled] = useState(true);

  const navigate = useNavigate();

  // Gets questions from backend database
  useEffect(() => {
    getQuestionsByCategory(props.category).then((questions) => {
      // Shuffle Questions
      setQuestions(questions.sort(() => Math.random() - 0.5));
    });
  }, [props.category]);

  // When a button with the right answer is clicked
  function onQuestionRight(e) {
    e.target.className = "correctButton";
    setQuestionButtonsEnabled(false)
    setScore(score + 1)
    // It might make more sense to update stats once at the end of the game, could be refactored in the future
    updateStats(true, questions[questionNumber].get('category'));
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1)
      setQuestionButtonsEnabled(true)
    }, 250);
  }

  // When a button with the wrong answer is clicked
  function onQuestionWrong(e) {
    e.target.className = "incorrectButton";
    setQuestionButtonsEnabled(false)
    // It might make more sense to update stats once at the end of the game, could be refactored in the future
    updateStats(false, questions[questionNumber].get('category'));
    setTimeout(() => { 
      setQuestionNumber(questionNumber + 1)
      setQuestionButtonsEnabled(true)
    }, 3000);
  }

  function onTimerExpire() {
    updateHighScore(score);
    navigate('/gameover', { state: { score: score } });
  }



  return (
    <div className="gameBox">
      <Header></Header>
      <div className="scoreBox">
        <p className="header">Score</p>
        <p className="value">{score}</p>
      </div>
      <Timer onTimerExpire={onTimerExpire}></Timer>
        {questions.length > 0 && (
          <Question 
            questionText={questions[questionNumber].get("question")}
            answers={[...questions[questionNumber].get("incorrect_answers"), questions[questionNumber].get("correct_answer")]}
            correctAnswer={questions[questionNumber].get("correct_answer")}
            onQuestionRight={onQuestionRight}
            onQuestionWrong={onQuestionWrong}
            isEnabled={questionButtonsEnabled} // when false, user cannot select answers (for testing purposes)
          />
        )}
    </div>
  );
};

export default Game;
