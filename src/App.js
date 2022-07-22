//======LIBRARIES & DEPENDENCIES

//======OUR COMPONENTS

//======OUR FUNCTIONS

//======STYLE & IMAGES
import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Message from "./components/Message/Message";
import LandingPage from "./components/LandingPage/LandingPage";
import Details from "./components/Details/Details";
import About from "./components/About/About";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home/:name" element={<Details />} />
          <Route path="/create" element={<Form />} />
          <Route path={"*"} element={<Message />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
