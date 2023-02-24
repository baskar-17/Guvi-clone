import React from "react";
import "./live-class.css";
import { FiChevronRight } from "react-icons/fi";

import Icon1 from "../../assets/live-class1.webp";
import Icon2 from "../../assets/live-class2.webp";
import Icon3 from "../../assets/live-class3.webp";
import Image from "../../assets/live-class4.webp";

function LiveClass() {
  return (
    <div className="live-container">
      <div className="live-heading-container">
        <h2>ZEN CLASS</h2>
        <div className="red-dot"></div> <h2>Live Classes</h2>
      </div>
      <div className="live-content">
        <div className="live-table">
          <div className="live-self">
            <div className="live-icon">
              <img src={Icon1} alt="Self Paced Courses Icon" />
            </div>
            <div className="live-content-desc">
              <h2>Full Stack Development</h2>
              <p>Learn Javascript, HTML, CSS & more</p>
            </div>
            <div className="live-take-a-look">
              <a href="#">Know More</a>
              <FiChevronRight size="1.5rem" className="live-chev" />
            </div>
          </div>

          <div className="live-self">
            <div className="live-icon">
              <img src={Icon2} alt="Self Paced Courses Icon" />
            </div>
            <div className="live-content-desc">
              <h2>Data Science</h2>
              <p>Learn Python, NLP, Tableau & more</p>
            </div>
            <div className="live-take-a-look">
              <a href="#">Know More</a>
              <FiChevronRight size="1.5rem" className="live-chev" />
            </div>
          </div>

          <div className="live-self">
            <div className="live-icon">
              <img src={Icon3} alt="Self Paced Courses Icon" />
            </div>
            <div className="live-content-desc">
              <h2>Automation & Testing</h2>
              <p>Learn Selenium, Python, Java & more</p>
            </div>
            <div className="live-take-a-look">
              <a href="#">Know More</a>
              <FiChevronRight size="1.5rem" className="live-chev" />
            </div>
          </div>
        </div>

        <div className="live-image">
          <img src={Image} alt="Live Courses Illustration" />
        </div>
      </div>
    </div>
  );
}

export default LiveClass;
