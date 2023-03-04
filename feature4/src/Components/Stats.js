import React, { useEffect, useState } from "react";
import { getAllStats } from "../Services/Service.js";

const MainList = () => {
    const [stats, setStats] = useState([]);
  
    useEffect(() => {
      getAllStats().then((stat) => {
        setStats(stat);
      });
    }, []);
  
    return (
      <div>
        <hr />
        <h3>This is the stats component</h3>
        {stats.length > 0 && (
          <ul>
            {stats.map((stat) => (
              <li key={stat.get("user")}>
                {stat.get("user")}: Top Score: {stat.get("topScore")}, Questions Answered: {stat.get("questionsAnswered")}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default MainList;
