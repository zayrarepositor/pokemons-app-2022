//======LIBRARIES & DEPENDENCIES
import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
//======OUR COMPONENTS

//======OUR FUNCTIONS

//======STYLE & IMAGES
import "./NavBar.css";

export default function NavBar() {
  return (
    <Fragment>
      <header className="navheader">
        <h4 className="navh4">POKEMON PROJECT</h4>
        <div className="divabout">
          <Link to="/about">
            <p className="pabout">ABOUT</p>
          </Link>
        </div>
        <div className="divhome">
          <Link to="/home">
            <p className="phome">HOME</p>
          </Link>
        </div>
      </header>
    </Fragment>
  );
}
