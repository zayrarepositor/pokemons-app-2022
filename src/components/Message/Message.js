//======LIBRARIES & DEPENDENCIES

//======OUR COMPONENTS

//======OUR FUNCTIONS

//======STYLE & IMAGES
import React from "react";
import { NavLink } from "react-router-dom";
import gloom from "./img/gloom.png";
import { Fragment } from "react";
import Home from "../Home/Home";

export default function Message() {
  return (
    <Fragment>
      <div className="msgcontainer">
        <img src={gloom} alt="..." />
        <h2>
          We'd have wanted you don't see us but here we are... Something has
          broken, we hope it's not our relationship... give us another chance
          please:
        </h2>
        <div className="msgbuttondiv">
          <NavLink to="/home" element={<Home />}>
            <button className="msgbutton">HOME</button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
