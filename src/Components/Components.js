import React, {useState} from "react";
import Game from "./Game/Game.js";
import GameOver from "./Game/GameOver.js"
import Stats from './Stats/Stats.js';
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import AuthRegister from "./Auth/AuthRegister.js";
import AuthLogin from "./Auth/AuthLogin.js";
import AuthModule from "./Auth/Auth.js";
import SelectCategory from "./Game/SelectCategory.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Components = () => {
  // Stores category selected in SelectCategory component and sends it to the Game component
  const [category, setCategory] = useState("All");

  const handleCategoryChoice = (cat) => {
    setCategory(cat);
  }

  // Routes to different pages used in the app, all are protected except the auth components
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthModule />}></Route>
        <Route path="/register" element={<AuthRegister />}></Route>
        <Route path="/login" element={<AuthLogin />}></Route>
        <Route path="/game" element={<ProtectedRoute path="/game" element={Game} category={category}/>}></Route>
        <Route path="/gameover" element={<ProtectedRoute path="/gameover" element={GameOver}/>}></Route>
        <Route path="/stats" element={<ProtectedRoute path="/stats" element={Stats} />}></Route>
        <Route path='/select' element={<ProtectedRoute path='/select' element={SelectCategory} handleClick={handleCategoryChoice}/>} ></Route>
        <Route path="*" element={<Navigate to="/game" replace />} />
      </Routes>
    </Router>
  );
 }

export default Components;
