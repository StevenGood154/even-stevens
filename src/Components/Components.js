import React from "react";
import Game from "./Game/Game.js";
import Stats from './Stats/Stats.js';
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import AuthRegister from "./Auth/AuthRegister.js";
import AuthLogin from "./Auth/AuthLogin.js";
import AuthModule from "./Auth/Auth.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Components = () => {
  // Currently routing to the main Game page as well as a Stats page, may eventually add more routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthModule />}></Route>
        <Route path="/register" element={<AuthRegister />}></Route>
        <Route path="/login" element={<AuthLogin />}></Route>
        <Route path="/game" element={<ProtectedRoute path="/game" element={Game} />}></Route>
        <Route path="/stats" element={<ProtectedRoute path="/stats" element={Stats} />}></Route>
        <Route path="*" element={<Navigate to="/game" replace />} />
      </Routes>
    </Router>
  );
 }

export default Components;
