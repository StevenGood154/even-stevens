import React from "react";
import Question from "./Question";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "../../Services/QuestionsService";
import { getCategoriesPerQuestion, getCategoryById } from "../../Services/CategoryService";
import "./Game.css";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [categoriesPerQuestion, setCategoriesPerQuestion] = useState([]);

  // Gets questions from backend database
  useEffect(() => {
    getQuestions().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  useEffect(() => {
    let categories = [];
    questions.forEach(question => {
      categories.push(getCategoryById(question.get("categoryId").id));
    })
    Promise.all(categories).then(cats => setCategoriesPerQuestion(cats));
  }, [questions]);

  // When a button with the right answer is clicked
  function onQuestionRight(e) {
    e.target.className = "button correct";
    console.log("Good Job!")
    setTimeout(() => setQuestionNumber(questionNumber + 1), 250);
  }

  // When a button with the wrong answer is clicked
  function onQuestionWrong(e) {
    e.target.className = "button incorrect";
    console.log("Too Bad!")
    setTimeout(() => setQuestionNumber(questionNumber + 1), 1500);
  }


  return (
    <div>
      <Link to="/stats">View User Stats</Link>
        {questions.length > 0 && (
          <Question 
            questionText={questions[questionNumber].get("question")}
            answers={[...questions[questionNumber].get("incorrect_answers"), questions[questionNumber].get("correct_answer")]}
            correctAnswer={questions[questionNumber].get("correct_answer")}
            category={categoriesPerQuestion.length > questionNumber ? categoriesPerQuestion[questionNumber].get("name") : "None"}
            onQuestionRight={onQuestionRight}
            onQuestionWrong={onQuestionWrong}
          />
        )}
    </div>
  );
};

export default Game;
