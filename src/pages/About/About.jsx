import React from "react";
import "./About.css";
import picture from "../About/picture.jpg";
import education from "../About/education.png";
import experience from "../About/experience.png";
import CV from "../../images/CV.pdf";
import github from "./github.png";
import linkedin from "./linkedin.png";
const About = () => {
  const handleDownloadCV = () => {
    window.open(CV, "_blank");
  };
  return (
    <div>
      <section id="about">
        <h1 class="title">About Me</h1>
        <div class="text-container">
          <p class="text">
            My name is Farzia Ghafory. I am 19 years old. This is my Final
            project for Madrid for Refugees Bootcamp.
          </p>
        </div>
        <div class="section-container">
          <div class="section__pic-container">
            <img src={picture} alt="Profile picture" class="about-pic" />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img src={experience} alt="Experience icon" class="icon" />
                <h3>Programming experience</h3>
                <p>
                  Refugees Code Graduate
                  <br />
                  Developed this functional React website for final project!
                </p>
              </div>
              <div class="details-container">
                <img src={education} alt="Education icon" class="icon" />
                <h3>Education</h3>
                <p>Graduated from high school</p>
              </div>
            </div>

            <div class="btn-container">
              <button class="btn btn-color-2" onClick={handleDownloadCV}>
                {" "}
                Download CV{" "}
              </button>
            </div>
            <div id="socials-container">
              <img
                id="linkedin_icon"
                src={linkedin}
                alt="My Linkedin profile"
                className="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/farzia-ghafory-625b542b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    "_blank"
                  )
                }
              ></img>
              <img
                id="github_icon"
                src={github}
                alt="My Github profile"
                className="icon"
                onClick={() =>
                  window.open("https://github.com/farziaghafory", "_blank")
                }
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
