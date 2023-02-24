import React from "react";
import "./learners.css";

import Logo1 from "../../assets/flipkart.webp";
import Logo2 from "../../assets/freshwork.webp";
import Logo3 from "../../assets/juspay.webp";
import Logo4 from "../../assets/charge.webp";
import Logo5 from "../../assets/zoho.webp";
import Logo6 from "../../assets/paypal.webp";
import Logo7 from "../../assets/amazon.webp";
import Logo8 from "../../assets/tcs.webp";

function Learners() {
  return (
    <div className="learners-container">
      <h3>Our Learners Work at</h3>

      <div className="learners-company-container">
        <div className="learners-company-logo">
          <img src={Logo1} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo2} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo3} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo4} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo5} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo6} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo7} alt="" />
        </div>

        <div className="learners-company-logo">
          <img src={Logo8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Learners;
