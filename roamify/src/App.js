import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Componets/Homepage";
import Communityforum from "./Componets/Communityforum";
import Signup from "./Componets/SignUp";
import NavBar from "./Componets/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Communityforum" element={<Communityforum />} />
        <Route path="/homepage" element={<Homepage />} />{" "}
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
