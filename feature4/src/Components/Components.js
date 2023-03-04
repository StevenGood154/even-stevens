import React from "react";
import Game from "./Game/Game.js";
import Stats from './Stats/Stats.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
    </Router>
  );
};

export default Components;
