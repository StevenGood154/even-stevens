import React, { useEffect, useState } from "react";
import { getStatsForCurrentUser } from "../../Services/StatsService.js";
// import { getAllAccounts } from "../../Services/AccountsService.js";
import { Link } from "react-router-dom";

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
    let categories = ['General Knowledge', 'Entertainment', 'Science', 'Sports', 'Geography', 'History']

    useEffect(() => {
      let acc = getStatsForCurrentUser();
      setAccount(acc);
    }, []);
  
    return (
      <div>
        <Link to="/game">Back to Questions</Link>
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
