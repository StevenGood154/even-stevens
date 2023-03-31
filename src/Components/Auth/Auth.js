import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import './AuthButton.css';

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/game");
    }
  }, [navigate]);

  return (
    <div className="box">
      <div>
        <h1>Trivia Game Login</h1>
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
        <br />
        <br />
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthModule;