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
  const [category, setCategory] = useState("All");

  const handleCategoryChoice = (cat) => {
    setCategory(cat);
  }

  // Currently routing to the main Game page as well as a Stats page, may eventually add more routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthModule />}></Route>
        <Route path="/register" element={<AuthRegister />}></Route>
        <Route path="/login" element={<AuthLogin />}></Route>
        <Route path="/game" element={<ProtectedRoute path="/game" element={Game} category={category}/>}></Route>
        <Route path="/gameover" element={<ProtectedRoute path="/gameover" element={GameOver}/>}></Route>
        <Route path="/stats" element={<ProtectedRoute path="/stats" element={Stats} />}></Route>
        {/* Make this next route protected */}
        <Route path="/select" element={<SelectCategory handleClick={handleCategoryChoice} />}></Route>
        <Route path="*" element={<Navigate to="/game" replace />} />
      </Routes>
    </Router>
  );
 }

export default Components;
