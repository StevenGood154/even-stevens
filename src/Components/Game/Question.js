import AnswerChoiceButton from "./AnswerChoiceButton.js";
import "./Question.css";
import { useEffect, useRef, useState } from "react";

const Question = ( props ) => {
  const [shuffledAnswers, setShuffledAnswers] = useState(null);
  const correctAnswerButton = useRef(null);

  useEffect(() => {
    if (props.answers) {
      setShuffledAnswers(
        props.answers
          .map((answer) => ({ text: answer, isCorrect: answer === props.correctAnswer }))
          .sort((a, b) => a.text.localeCompare(b.text))
      );
    }
  }, [props.answers, props.correctAnswer]);

  let txt = new DOMParser().parseFromString(props.questionText, "text/html");
  let newQuestion = txt.documentElement.textContent;

  function handleOnQuestionRight(e) {
    props.onQuestionRight(e)
  }

  function handleOnQuestionWrong(e) {
    correctAnswerButton.current.className = "correctButton"
    props.onQuestionWrong(e)
  }

  return (
    <div className="questionBlock">
      <p className="questionText">{newQuestion}</p>
      {shuffledAnswers && (
        <ul className="answerChoiceBlock">
          {shuffledAnswers.map((answer) => (
            <li key={answer.text}>
              <AnswerChoiceButton ref={answer.isCorrect ? correctAnswerButton : null}
                buttonText={answer.text}
                onClick={answer.isCorrect ? handleOnQuestionRight : handleOnQuestionWrong}
                isEnabled={props.isEnabled}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question;
