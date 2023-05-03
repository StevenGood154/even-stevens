import "./Timer.css";
import { useState } from "react";

const Timer = (props) => {
  // Default value for timer is 1 minute (60 seconds)
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
    // Used to help the timer change color as the time remaining decreases
    <div className={`timerBlock ${timer >= 30 ? 'greenBackground' : (timer >= 10 ? 'yellowBackground' : 'redBackground')}`}>
      <p className="timerText">{timer}</p>
    </div>
  );
};

export default Timer;
