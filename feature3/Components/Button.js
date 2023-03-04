import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// buttonText : what is displayed on button
const Button = ({ buttonText, onAnswerChoiceClick }) => {
  return html`<button onClick="${onAnswerChoiceClick}">${buttonText}</button>`;
};

export default Button;
