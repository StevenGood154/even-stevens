import { forwardRef } from "react";
import "./AnswerChoiceButton.css";

// buttonText : what is displayed on button
const AnswerChoiceButton = forwardRef(( props, ref ) => {
  let txt = new DOMParser().parseFromString(props.buttonText, "text/html");
  let newButtonText = txt.documentElement.textContent;

  return (<button ref={ref} onClick={props.isEnabled ? props.onClick : ()=>{} } className="answerChoiceButton">
    {newButtonText}
  </button>);
});

export default AnswerChoiceButton;
