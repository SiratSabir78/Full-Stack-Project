import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Communityforum from "./Communityforum";


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
