import React from "react";
import Question from "./Question";
import { useEffect, useState } from "react";
import { getQuestions } from "../../Services/TriviaQuestions.js";
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
      <hr />
      This is the main list component.
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
