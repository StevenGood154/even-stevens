import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import '../Auth/AuthButton.css';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect user back to landing page if they're not logged in
    if (!checkUser()) {
      alert("Unauthorized! Please log in.");
      navigate("/");
    }
  }, [navigate]);

  if (checkUser()) {
    if (rest['category']) {
      return <Component category={rest['category']}/>;
    } else {
      return <Component />
    }
  } else {
    return (<div></div>);
  }
};

export default ProtectedRoute;