import "./Timer.css";
import { useState } from "react";

const Button = (props) => {
  const [timer, setTimer] = useState(60);

  const decrement = () => {
    setTimeout(() => {
      if (timer > 1)
        setTimer(timer - 1);
      else
        props.onTimerExpire()  
    }, 1000);
  }

  decrement();

  return (
    <div className={`timerBlock ${timer >= 30 ? 'greenBackground' : (timer >= 10 ? 'yellowBackground' : 'redBackground')}`}>
      <p className="timerText">{timer}</p>
    </div>
  );
};

export default Button;
