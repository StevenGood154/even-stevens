import { forwardRef } from "react";
import "./QuestionButton.css";

// buttonText : what is displayed on button
const QuestionButton = forwardRef(( props, ref ) => {
  let txt = new DOMParser().parseFromString(props.buttonText, "text/html");
  let newButtonText = txt.documentElement.textContent;

  return (<button ref={ref} onClick={props.isEnabled ? props.onClick : ()=>{} } className="questionButton">
    {newButtonText}
  </button>);
});

export default QuestionButton;
