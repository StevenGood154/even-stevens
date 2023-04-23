import React, { useEffect, useState } from "react";
import { getStatsForCurrentUser } from "../../Services/StatsService.js";
import { logoutUser } from "../../Services/StatsService.js";
// import { getAllAccounts } from "../../Services/AccountsService.js";
import { useNavigate } from "react-router-dom";
import '../Game/Game.css';

// Routed component that will eventually show stats for a specific user and by category
const Stats = () => {
    const [account, setAccount] = useState({
      'name': '',
      'totalCorrect': '',
      'totalAnswered': '',
      'categoryAnswered': {},
      'categoryCorrect': {},
      'highScore': ''
    });
    let categories = ['General Knowledge', 'Entertainment', 'Science', 'Sports', 'Geography', 'History'];
    const navigate = useNavigate();

    useEffect(() => {
      let acc = getStatsForCurrentUser();
      setAccount(acc);
    }, []);

    const onLogoutUser = () => {
      logoutUser();
      navigate('/');
    }
  
    return (
      <div>
        <button className="gameButton" onClick={() => navigate('/game')}>Back to Questions</button>
        <button className="gameButton" onClick={onLogoutUser}>Log Out</button>
        <h3>Stats for User: {account['name']}</h3>
        <h4>High Score: {account['highScore']}</h4>
        <h3>Total Stats</h3>
        <h4>Accuracy: {(account['totalCorrect']/account['totalAnswered']*100).toFixed(1)}%, Questions Answered: {account['totalAnswered']}</h4>
        <h4>Accuracy by Category</h4>
        <ul>
          {categories.map((cat) => {
            if (account['categoryAnswered'][cat] > 0) {
              return (<li>{cat}: {(100*account['categoryCorrect'][cat]/account['categoryAnswered'][cat]).toFixed(1)}%</li>)
            } else {
              return (<li>{cat}: None Answered</li>)
            }
          })}
        </ul>
        <h4>Questions Answered by Category</h4>
        <ul>
          {categories.map((cat) => {
            return (<li>{cat}: {account['categoryAnswered'][cat]}</li>)
          })}
        </ul>
      </div>
    );
  };
  
  export default Stats;
