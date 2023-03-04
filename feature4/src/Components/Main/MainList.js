import React, { useEffect, useState } from "react";
import { getAllUsers } from "../..//Services/Service";

const MainList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <hr />
      This is the main list component.
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.get("question")}>
              {user.get("question")}: {user.get("correct_answer")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainList;
