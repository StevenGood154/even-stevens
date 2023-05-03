import { useLocation, useNavigate } from "react-router-dom"
import Header from "./Header";
import "./GameOver.css";

const GameOver = () => {
  const location = useLocation();
  const score = location.state?.score;  // To display user's score on the game over screen

  const navigate = useNavigate();

  function handlePlayAgain() {
    navigate('/game');
  }

  return (
    <div id="gameOverPage">
      <Header></Header>
      <h1>Game Over!</h1>
      <div className="scoreBox">
        <p className="header">Score</p>
        <p className="value">{score}</p>
      </div>
      <button className="gameButton"
        onClick={handlePlayAgain}
      >Play Again</button>
    </div>
  )
}

export default GameOver