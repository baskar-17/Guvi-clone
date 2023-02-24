import React from "react";
import "./cta.css";

import Image from "../../assets/envelope-cuate.webp";

function CTA() {
  return (
    <div className="cta">
      <div className="cta-container">
        <div className="cta-image">
          <img src={Image} alt="" />
        </div>
        <div className="cta-content">
          <h4>
            Stay in Touch for Awesome <span>Updates & Offers!</span>{" "}
          </h4>
          <p>
            Subscribe to our newsletter for alerts on New Courses, Free
            Workshops, & Masterclasses.
          </p>
          <div className="cta-inputfields-btn">
            <input
              type="email"
              placeholder="Enter your mail id"
              id="userEmailId"
            />
            <button className="primary-btn">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
