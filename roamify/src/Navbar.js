import React from "react";
import "./Navbar.css";
import "./App.css";
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="/Roamify.png"
            alt="Logo"
            width="60"
            height="60"
            class="d-inline-block align-text-top"
          />
          <strong> Roamify</strong>
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./Home.js">
              <strong> Home</strong>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <strong> Profile</strong>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <strong> Your trips</strong>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              <strong> Community Forum</strong>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              <strong> Logout</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
