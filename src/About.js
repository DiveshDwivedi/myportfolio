import React from "react";
import "./About.css";
import aboutImg from "./img/dd3.jpg";

function About() {
  // Up to Top Btn
  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active",window.scrollY > 0)
  })
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                My Name is Divesh Dwivedi, i completed my graduation from BN College of Engineering & Technology
                in Computer Science and Engineering stream with 7.8 cgpa(Hons).
              </p>
              <p className="about__text p__color">
               I did an internship on Frontend web development.
               Where i learn to develope responsive web pages using HTML5, CSS3 and JavaScript.
               To design creative and user friendly pages uisng React.js JavaScript Liberary to makes
                pages more efficient. 
              </p>
              <p className="about__text p__color">
              I did an internship on Software development.
              Where i learn to develope Desktop application using Core Java and SQL(Database).
              NetBeans is used as a framework to develope desktop application. 
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#" download>
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN  */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
