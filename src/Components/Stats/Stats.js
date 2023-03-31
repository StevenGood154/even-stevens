import React, { useEffect, useState } from "react";
import { getAllAccounts } from "../../Services/AccountsService.js";
import { Link } from "react-router-dom";

// Routed component that will eventually show stats for a specific user and by category
const Stats = () => {
    const [accounts, setUsers] = useState([]);

    useEffect(() => {
      getAllAccounts().then((accout) => {
        setUsers(accout);
      });
    }, []);
  
    return (
      <div>
        <Link to="/game">Back to Questions</Link>
        <h3>This is the stats component</h3>
        {accounts.length > 0 && (
          <ul>
            {accounts.map((accout) => (
              <li key={accout.id}>
                {accout.get("name")}: Top Score: {accout.get("highScore")}, Questions Answered: {accout.get("questionsAnswered")}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Stats;
