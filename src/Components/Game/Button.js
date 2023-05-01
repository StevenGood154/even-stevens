import { forwardRef } from "react";
import "./Button.css";

// buttonText : what is displayed on button
const Button = forwardRef(( props, ref ) => {
  let txt = new DOMParser().parseFromString(props.buttonText, "text/html");
  let newButtonText = txt.documentElement.textContent;

  return (<button ref={ref} onClick={props.isEnabled ? props.onClick : ()=>{} } className="button">
    {newButtonText}
  </button>);
});

export default Button;
