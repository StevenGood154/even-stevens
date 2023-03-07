import Button from "./Button.js";
import "./Question.css"

const Question = ({ data }) => {
  function correctClick() {
    console.log("Correct!");
  }
  function incorrectClick() {
    console.log("Incorrect");
  }

  let txt = new DOMParser().parseFromString(data.get("question"), "text/html");
  let newQuestion = txt.documentElement.textContent;

  const correctAnswerButtonHTML = (<Button
    buttonText={data.get("correct_answer")}
    onAnswerChoiceClick={correctClick}
  />);

  const incorrectAnswerButtonsHTML = data.get("incorrect_answers").map(
    (incorrect_answer) => {
      return (<Button 
        buttonText={incorrect_answer}
        onAnswerChoiceClick={incorrectClick}
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
    <p className="questionText">{newQuestion}</p>
    <ul className="answerChoiceBlock">
      {shuffledAnswerChoices.map((a) => {
        console.log()
        return (<li key={a.props.buttonText}> {a}</li>);
      })}
    </ul>
  </div>);
};

export default Question;
