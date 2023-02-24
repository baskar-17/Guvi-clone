import React from "react";

import "./offers.css";
import Icon1 from "../../assets/offers1.webp";
import Icon2 from "../../assets/offers2.webp";
import Icon3 from "../../assets/offers3.webp";
import Icon4 from "../../assets/offers4.webp";
import Image from "../../assets/offers5.webp";

import { FiChevronRight } from "react-icons/fi";

function Offers() {
  return (
    <div className="offers-container">
      <h2>What GUVI offers you?</h2>
      <div className="offers-content">
        <div className="offers-table">
          <div className="self">
            <div className="icon">
              <img src={Icon1} alt="Self Paced Courses Icon" />
            </div>
            <div className="content">
              <h2>Self Paced Courses</h2>
              <p>Learn & Upskill via Online Courses</p>
            </div>
            <div className="take-a-look">
              <a href="#">Take a Look</a>
              <FiChevronRight size="1.5rem" className="chev" />
            </div>
          </div>

          <div className="self">
            <div className="icon">
              <img src={Icon2} alt="Self Paced Courses Icon" />
            </div>
            <div className="content">
              <h2>LIVE Classes</h2>
              <p>Live Classes offering Guaranteed Job Placement Support</p>
            </div>
            <div className="take-a-look">
              <a href="#">Take a Look</a>
              <FiChevronRight size="1.5rem" className="chev" />
            </div>
          </div>

          <div className="self">
            <div className="icon">
              <img src={Icon3} alt="Self Paced Courses Icon" />
            </div>
            <div className="content">
              <h2>Interactive Practice Platforms</h2>
              <p>Learn through Hands-on Coding Experience</p>
            </div>
            <div className="take-a-look">
              <a href="#">Take a Look</a>
              <FiChevronRight size="1.5rem" className="chev" />
            </div>
          </div>

          <div className="self">
            <div className="icon">
              <img src={Icon4} alt="Self Paced Courses Icon" />
            </div>
            <div className="content">
              <h2>For Corporates</h2>
              <p>Meet your hiring needs at ease</p>
            </div>
            <div className="take-a-look">
              <a href="#">Take a Look</a>
              <FiChevronRight size="1.5rem" className="chev" />
            </div>
          </div>
        </div>
        <div className="offers-image">
          <img src={Image} alt="Offers Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
