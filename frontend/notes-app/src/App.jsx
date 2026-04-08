//This is the main central component of the frontend folder

import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  // this is where you use the imported path?
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} /> {/* Path, where you can have different */}
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div> {routes}</div>
};

export default App