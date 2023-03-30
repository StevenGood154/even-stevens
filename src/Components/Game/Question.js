import Button from "./Button.js";
import "./Question.css";
import { useEffect, useState } from "react";
import { getCategoryById } from "../../Services/CategoryService.js";

const Question = ({
  questionText,
  answers,
  correctAnswer,
  category,
  onQuestionRight,
  onQuestionWrong,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState(null);
  // const [cat, setCat] = useState(null);

  // useEffect(() => {
  //   getCategoryById(categoryId).then((questionCategory) => {
  //     setCat(
  //       questionCategory.get("name").charAt(0).toUpperCase() +
  //         questionCategory.get("name").slice(1)
  //     );
  //   });
  // }, [categoryId]);

  useEffect(() => {
    if (answers) {
      setShuffledAnswers(
        answers
          .map((answer) => ({ text: answer, isCorrect: answer === correctAnswer }))
          .sort(() => Math.random() - 0.5)
      );
    }
  }, [answers, correctAnswer]);

  let txt = new DOMParser().parseFromString(questionText, "text/html");
  let newQuestion = txt.documentElement.textContent;

  return (
    <div className="questionBlock">
      <p>Category: {category}</p>
      <p className="questionText">{newQuestion}</p>
      {shuffledAnswers && (
        <ul className="answerChoiceBlock">
          {shuffledAnswers.map((answer) => (
            <li key={answer.text}>
              <Button
                buttonText={answer.text}
                onAnswerChoiceClick={answer.isCorrect ? onQuestionRight : onQuestionWrong}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question;
