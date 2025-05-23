import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Componets/CSS/App.css";
import Homepage from "./Componets/Homepage";
import Navbar from "./Componets/Navbar";
import Communityforum from "./Componets/Communityforum";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Communityforum" element={<Communityforum />} />
      </Routes>
    </Router>
  );
}

export default App;
