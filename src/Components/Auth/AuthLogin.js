import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import './AuthButton.css';

const AuthLogin = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  const [add, setAdd] = useState(false);


  // don't let user do anything if they're already logged in
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/select");
    }
  }, [navigate]);

  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(
            `Hello ${userLoggedIn.get("firstName")}, you successfully logged in!`
          );
          navigate("/select");
        }
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  return (
    <div className="box">
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthLogin;