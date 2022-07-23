//======LIBRARIES & DEPENDENCIES
import React from "react";
import { Fragment } from "react";
//======OUR COMPONENTS
import NavBar from "../NavBar/NavBar";
//======OUR FUNCTIONS

//======STYLE & IMAGES
import "./About.css";

export default function About() {
  return (
    <Fragment>
      <div className="aboutcontainer">
        <NavBar />
        <section className="aboutsection">
          <div className="aboutcard">
            <div className="about-h1box">
              <h1>pokemon-app-2022</h1>
            </div>
            <div className="about-text">
              <p>
                <span>❤</span> Hey there!{" "}
              </p>
              <p>
                I am Zayra Velasco, soft developer/admin manager, and this is a
                personal project -in progress- with:
              </p>
              <p>
                <span> Node, Express & Sequelize</span> +{" "}
                <span> React, Redux & CSS</span>
              </p>
              <p>
                created as one of the <span>Henry Bootcamp</span> challenges.
              </p>
            </div>
            {/* GITHUB REPOSITORY */}
            <div className="about-h2box">
              <h2> ☑ Check it out code:</h2>
            </div>
            <div className="about-text">
              <ul>
                <li>
                  Github <span>☞</span>{" "}
                  <a
                    className="about-links"
                    href="https://github.com/zayrarepositor/pokemons-app-2022"
                    target="_blank"
                    rel="noopener noreferrer">
                    Pokemons App
                  </a>
                </li>
              </ul>
            </div>
            {/* CONTACT */}
            <div className="about-h2box">
              <h2>✉ Contact me:</h2>
            </div>
            <div className="about-text">
              <ul>
                <li>
                  Github <span>☞</span>{" "}
                  <a
                    className="about-links"
                    href="https://github.com/zayrarepositor"
                    target="_blank"
                    rel="noopener noreferrer">
                    zayrarepositor
                  </a>
                </li>
                <li>
                  LinkedIn <span> ☞ </span>{" "}
                  <a
                    className="about-links"
                    href="https://www.linkedin.com/in/zayra-velasco"
                    target="_blank"
                    rel="noopener noreferrer">
                    Zayra Velasco
                  </a>
                </li>
                <li>
                  Mail<span> ☞ </span>{" "}
                  <a
                    className="about-links"
                    href="mailto:zayra.contacto@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    zayra.contacto (gmail)
                  </a>
                </li>
              </ul>
            </div>
            <div className="about-h2box">
              <h2>
                <span>Good Life!</span> ( ͡~ ͜ʖ ͡°)
              </h2>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
