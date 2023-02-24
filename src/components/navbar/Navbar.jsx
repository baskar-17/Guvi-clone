import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";

import logo from "../../assets/foot-guvi-logo.webp";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="guvi-logo">
          <img src={logo} alt="Guvi Logo" />
        </div>
        <div className="guvi-content">
          <div className="guvi-nav-links">
            <ul>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">LIVE Classes</a>
              </li>
              <li>
                <a href="#">Practice</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Our Solutions</a>
              </li>
            </ul>
          </div>
          <div className="guvi-nav-buttons">
            <button className="secondary-btn">Login</button>
            <button className="primary-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
