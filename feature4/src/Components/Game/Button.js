// buttonText : what is displayed on button
const Button = ({ buttonText, onAnswerChoiceClick }) => {
  let txt = new DOMParser().parseFromString(buttonText, "text/html");
  let newButtonText = txt.documentElement.textContent;
  return (<button onClick="{onAnswerChoiceClick}" className="button">
    {newButtonText}
  </button>);
};

export default Button;
