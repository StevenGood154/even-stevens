import {
  useRef
} from "react";
import Button from "./Button.js";

const Question = ({ data }) => {
  function correctClick() {
    console.log("Correct!");
    // Will handle correct response later
    // correctAnswerButtonRef.current.base.classList.add("correctChoice");
  }
  function incorrectClick() {
    console.log("Incorrect");
    // Will handle incorrect response later
    // correctAnswerButtonsRef.current.base.classList.add("correctChoice");
    // incorrectAnswerButtonRefs[0].current.base.classList.add("incorrectChoice");
  }

  const correctAnswerButtonRef = useRef(null);
  const incorrectAnswerButtonRefs = [useRef(null), useRef(null), useRef(null)];

  let txt = new DOMParser().parseFromString(data.get("question"), "text/html");
  let newQuestion = txt.documentElement.textContent;

  // const correctbutton = html`<{Button}
  //   ref={correctAnswerButton}
  //   buttonText={data.correct_answer}
  //   onAnswerChoiceClick="{correctClick}"
  // />`

  const correctAnswerButtonHTML = (<Button
    ref={correctAnswerButtonRef}
    buttonText={data.get("correct_answer")}
    onAnswerChoiceClick="{correctClick}"
  />);

  const incorrectAnswerButtonsHTML = data.get("incorrect_answers").map(
    (incorrect_answer, index) => {
      return (<Button 
        ref={incorrectAnswerButtonRefs[index]}
        buttonText={incorrect_answer}
        onAnswerChoiceClick="{incorrectClick}"
      />);
    }
  );

  const answerChoices = [
    incorrectAnswerButtonsHTML[0],
    incorrectAnswerButtonsHTML[1],
    incorrectAnswerButtonsHTML[2],
    correctAnswerButtonHTML
  ];

  const shuffledAnswerChoices = answerChoices.sort(
    (a, b) => 0.5 - Math.random()
  );

  return (<div className="questionBlock">
    <p className="questionText">Question: {newQuestion}</p>
    <ul>
      {shuffledAnswerChoices.map((a) => {
        console.log()
        return (<li key={a.props.buttonText}> {a}</li>);
      })}
    </ul>
  </div>);
};

export default Question;
