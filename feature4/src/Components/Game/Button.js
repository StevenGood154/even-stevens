import "./Button.css";

// buttonText : what is displayed on button
const Button = ({ buttonText, onAnswerChoiceClick, buttonRef }) => {
  let txt = new DOMParser().parseFromString(buttonText, "text/html");
  let newButtonText = txt.documentElement.textContent;

  return (<button onClick={onAnswerChoiceClick} className="button" ref={buttonRef}>
    {newButtonText}
  </button>);
};

export default Button;
