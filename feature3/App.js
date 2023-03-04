import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";

import Game from "./Components/Game.js";

function App() {
  return html`<${Game} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
