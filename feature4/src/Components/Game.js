import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getQuestions } from "../Services/TriviaQuestions.js";
import Question from "./Question.js";
import Button from "./Button.js";

const Game = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((users) => {
      setQuestions(users);
    });
  }, []);

  function correctClick() {
    console.log("Correct!");
    // Will handle correct response later
  }
  function incorrectClick() {
    console.log("Incorrect");
    // Will handle incorrect response later
  }

  // Right now correct reponses are all listed first
  return html`
    <div>
      ${questions.map((q) => {
        return html` <${Question} data=${q.question} />
          <${Button}
            buttonText=${q.correct_answer}
            onAnswerChoiceClick="${correctClick}"
          />
          ${q.incorrect_answers.map((a) => {
            return html`<${Button}
              buttonText=${a}
              onAnswerChoiceClick="${incorrectClick}"
            />`;
          })}`;
      })}
    </div>
  `;
};

export default Game;
