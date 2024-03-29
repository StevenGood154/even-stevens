import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const AuthRegister = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [add, setAdd] = useState(false);

  // redirect already authenticated users back to select category page
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/select");
    }
  }, [navigate]);

  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
          navigate("/select");
        }
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewUser({
      ...newUser,
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
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;