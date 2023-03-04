import React, { useEffect, useState } from "react";
import { getAllAccounts } from "../../Services/TriviaQuestions.js";

const MainList = () => {
    const [accounts, setUsers] = useState([]);

    useEffect(() => {
      getAllAccounts().then((accout) => {
        setUsers(accout);
      });
    }, []);
  
    return (
      <div>
        <hr />
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
  
  export default MainList;
