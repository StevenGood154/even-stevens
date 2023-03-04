import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const Question = ({ data }) => {
  return html` <p>Question: ${data}</p>`;
};

export default Question;
