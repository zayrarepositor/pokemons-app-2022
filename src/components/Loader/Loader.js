//======LIBRARIES & DEPENDENCIES

//======OUR COMPONENTS

//======OUR FUNCTIONS

//======STYLE & IMAGES
import { React } from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loadercontainer">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
