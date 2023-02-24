import React from "react";
import "./footer.css";

import Logo from "../../assets/foot-guvi-logo.webp";
import Icon1 from "../../assets/social-facebook.webp";
import Icon2 from "../../assets/social-insta.webp";
import Icon3 from "../../assets/social-linkedin.webp";
import Icon4 from "../../assets/social-twitter.webp";
import Icon5 from "../../assets/social-telegram.webp";
import Icon6 from "../../assets/social-youtube.webp";
import Gplay from "../../assets/gplay.webp";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <a href="#">
              <img src={Logo} alt="Guvi Logo" />
            </a>
          </div>
          <div className="footer-button">
            <button className="territory-btn">Refer & Earn</button>
          </div>
          <div className="footer-social_links">
            <p>Follow us on</p>
            <div className="social-icons">
              <img src={Icon1} alt="Facebook" />
              <img src={Icon2} alt="Instagram" />
              <img src={Icon3} alt="Linkedin" />
              <img src={Icon4} alt="Twitter" />
              <img src={Icon5} alt="Telegram" />
              <img src={Icon6} alt="YouTube" />
            </div>
            <div className="gplay-logo">
              <img src={Gplay} alt="Get it on Google Play" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-right">
            <div className="footer-links-list">
              <h6>Course Library</h6>
              <a href="">Courses</a>
              <a href="">Free Library</a>
              <a href="">Offers</a>
            </div>

            <div className="footer-links-list">
              <h6>ZEN CLASS Live Classes</h6>
              <a href="">Full Stack Development</a>
              <a href="">IIT-M Advanced Programming & Data Science Program</a>
              <a href="">Automation & Testing Program</a>
            </div>
          </div>

          <div className="footer-links-right">
            <div className="footer-links-list">
              <h6>Practice</h6>
              <a href="">Codekata</a>
              <a href="">Webkata</a>
              <a href="">IDE</a>
            </div>

            <div className="footer-links-list">
              <h6>Resources</h6>
              <a href="">Rewards</a>
              <a href="">Refer a Friend</a>
              <a href="">Blogs</a>
              <a href="">Forum Support</a>
            </div>
          </div>

          <div className="footer-links-right">
            <div className="footer-links-list">
              <h6>Products</h6>
              <a href="">HackerKid</a>
              <a href="">GUVI for Corporates</a>
              <a href="">Placement Preparation</a>
            </div>

            <div className="footer-links-list">
              <h6>Company</h6>
              <a href="">Refund Policy</a>
              <a href="">FAQ's</a>
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="terms">
        <a href="">Terms and Conditions</a>
        <a href="">Privacy Policy</a>
        <a href=""> &#169; GUVI GeeksGUVI Geeks Network Pvt. Ltd.</a>
      </div>
    </div>
  );
}

export default Footer;
