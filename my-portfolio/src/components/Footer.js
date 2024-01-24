import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div className="home">
              <p>Narhe gone House No. 205 Manaji Nagar.</p>
              <p>Pune, Maharashtra.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9860061185
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              aadeshdongare98@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About</h4>
          <div>
            <p>
              <span>About Me : </span>Hello! I'm Aadesh Dongare, a web developer
              specializing in frontend technologies. My expertise includes
              HTML5, CSS3, Bootstrap, JavaScript, React.js, Redux, Node.js, and
              MongoDB.
            </p>
          </div>

          <div className="underright">
            <h4 className="section-title">Why Choose Me :</h4>

            <div className="point">
              <h5>Frontend Excellence:</h5>
              <p>
                Crafting visually stunning and responsive user interfaces for an
                engaging experience.
              </p>
            </div>

            <div className="point">
              <h5>React.js Innovation:</h5>
              <p>
                Proficient in React.js and Redux, bringing innovation to dynamic
                web applications.
              </p>
            </div>

            <div className="point">
              <h5>Holistic Approach:</h5>
              <p>
                Excelling in frontend, I also possess backend skills in Node.js
                and MongoDB, ensuring a well-rounded web development approach.
              </p>
            </div>

            <p className="portfolio-info">
              Explore my portfolio for impactful examples of my work. Eager to
              contribute to innovative web solutions, let's connect and discuss
              how I can bring value to your team.
            </p>
          </div>

          <div className="social">
            <FaWhatsapp
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
