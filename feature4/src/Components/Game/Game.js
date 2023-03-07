import React from "react";
import Question from "./Question";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "../../Services/QuestionsService";
import "./Game.css";

const Game = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  return (
    <div>
      <Link to="/stats">View User Stats</Link>
      <ul>
        {questions.length > 0 && (
          questions.map((q) => {
            return (
              <li key={q.id}><Question data={q}/></li>
            )
          })
        )}
      </ul>
    </div>
  );
};

export default Game;
