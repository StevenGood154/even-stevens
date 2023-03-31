import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import '../Auth/AuthButton.css';

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div className="box">
        <div><h2>Unauthorized!</h2> <button onClick={goBackHandler} className="button">Go To Authentication</button></div>
      </div>
    );
  }
};

export default ProtectedRoute;