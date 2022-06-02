import React from "react";
import img from './images.png'

function Card() {
  return (
      <div class="column">
        <div class="team">
          <div class="team-img">
            <img src={img} alt="Team" />
          </div>
          <div class="team-content">
            <h2>PICT</h2>
            <h3>Developer</h3>
            <p>Some text goes here that describes about student</p>
          </div>
          <div class="team-social">
            <a href="/" class="social-li">
              {" "}
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="/" class="social-in">
              {" "}
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/" class="social-yt">
              {" "}
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
  );
}

export default Card;
