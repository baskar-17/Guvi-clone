import React from "react";
import "./explore.css";
import { useState } from "react";

import codekata from "../../assets/lap-codekata.webp";
import webkata from "../../assets/lap-webkata.webp";
import debugging from "../../assets/lap-debugging.webp";
import IDE from "../../assets/lap-ide.webp";
import rewards from "../../assets/lap-rewards.webp";
import referral from "../../assets/lap-referral.webp";
import forum from "../../assets/lap-forum.webp";

function Explore() {
  let [switchTo, newSwitchTo] = useState(1);

  function switchTab(index) {
    newSwitchTo(index);
  }

  return (
    <div className="explore-container">
      <h3>Learn. Practice. Earn. Have Fun!</h3>

      <div className="explore-tabs-container">
        <div
          className={
            switchTo === 1 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(1)}
        >
          <p>Codekata</p>
          <span
            className={switchTo === 1 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>

        <div
          className={
            switchTo === 2 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(2)}
        >
          <p>Webkata</p>
          <span
            className={switchTo === 2 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>

        <div
          className={
            switchTo === 3 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(3)}
        >
          <p>Debugging</p>
          <span
            className={switchTo === 3 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>
        <div
          className={
            switchTo === 4 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(4)}
        >
          <p>IDE</p>
          <span
            className={switchTo === 4 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>
        <div
          className={
            switchTo === 5 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(5)}
        >
          <p>Rewards</p>
          <span
            className={switchTo === 5 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>
        <div
          className={
            switchTo === 6 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(6)}
        >
          <p>Referral</p>
          <span
            className={switchTo === 6 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>
        <div
          className={
            switchTo === 7 ? "explore-tabs active-tab" : "explore-tabs"
          }
          onClick={() => switchTab(7)}
        >
          <p>Forum</p>
          <span
            className={switchTo === 7 ? "explore-tab-bottomline" : "d-none"}
          ></span>
        </div>
      </div>

      <div className="explore-content-container">
        <div className={switchTo === 1 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={codekata} alt="Learn Codekata" />
          </div>
          <div className="explore-content">
            <h4>Codekata</h4>
            <p>
              An interactive platform for programming practice with 1500+ coding
              problems curated by the best programming veterans in the IT
              industry. CodeKata tracks the performance & develops coding
              profile for the coders to showcase their skillset in job
              recruitment process. Boost up your potential to crack coding
              interviews by solving CodeKata problems.
            </p>
            <button className="primary-btn">Explore Codekata</button>
          </div>
        </div>

        <div className={switchTo === 2 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={webkata} alt="Learn Webkatta" />
          </div>
          <div className="explore-content">
            <h4>Webkata</h4>
            <p>
              WebKata is the developing practice platform for beginners, built
              with top-notch web development problem statements focusing on
              Modern HTML, CSS & JavaScript. Further, advanced projects can be
              developed onGitHub. Accelerate your Web Development skills through
              WebKata assignments.
            </p>
            <button className="primary-btn">Explore Webkata</button>
          </div>
        </div>

        <div className={switchTo === 3 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={debugging} alt="Learn Debugging" />
          </div>
          <div className="explore-content">
            <h4>Debugging</h4>
            <p>
              Debugging a series of programs curated by experts from the
              industry. Practising on Debugging will help you get started and be
              familiarised with programming. We will recommend your profile to
              recruiting companies based on your performance in debugging. You
              can be a better programmer and crack interviews by completing
              Debugging.
            </p>
            <button className="primary-btn">Explore Debugging</button>
          </div>
        </div>

        <div className={switchTo === 4 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={IDE} alt="Learn IDE" />
          </div>
          <div className="explore-content">
            <h4>IDE</h4>
            <p>
              GUVI IDE is an Integrated Development Environment that lets you
              write, edit, run, test & debug your code. You can fix your code
              with the debugger supported by language like JavaScript, Python3 &
              Ruby. While, you can write code in 20 different programming
              languages.
            </p>
            <button className="primary-btn">Explore IDE</button>
          </div>
        </div>

        <div className={switchTo === 5 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={rewards} alt="Learn Rewards" />
          </div>
          <div className="explore-content">
            <h4>Rewards</h4>
            <p>
              Rewards are for GUVI users to redeem the points earned through
              CodeKata, WebKata, & through Referral. Exciting rewards can be
              earned just by referring GUVI to family, friends & others.
            </p>
            <button className="primary-btn">Explore Rewards</button>
          </div>
        </div>

        <div className={switchTo === 6 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={referral} alt="Learn Referrals" />
          </div>
          <div className="explore-content">
            <h4>Referral</h4>
            <p>
              Referral scheme of GUVI is as simple as a click. Share the
              referral code with your peers, family & friends to earn points and
              further, redeem those points for unbelievable rewards like iPhone,
              Amazon Vouchers, etc.
            </p>
            <button className="primary-btn">Explore Referral</button>
          </div>
        </div>

        <div className={switchTo === 7 ? "explore active-explore" : "explore"}>
          <div className="explore-image">
            <img src={forum} alt="Learn Forum" />
          </div>
          <div className="explore-content">
            <h4>Forum</h4>
            <p>
              Forum is technical community platform for students, professionals,
              or any tech-geek to discuss the latest technical doubts, software
              upgradations or any trending tech news. Our dedicated tech-experts
              will address all the tech-queries within 48hrs.
            </p>
            <button className="primary-btn">Explore Forum</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
