//======LIBRARIES & DEPENDENCIES
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

//======OUR COMPONENTS
import NavBar from "../NavBar/NavBar";
import useForm from "./useForm";
import Loader from "../Loader/Loader.js";
import Formtypes from "./Formtypes";

//======OUR FUNCTIONS
import { getTypes } from "../../redux/actions/index";
import validateForm from "./helper";
//======STYLE & IMAGES
import "././css/Form.css";

const initialForm = {
  name: "",
  hp: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  types: [],
  img: "",
};
const initialTypes = {
  types: [],
};
export default function Form({ edit }) {
  const {
    pokeForm,
    errors,
    loader,
    handleBlur,
    handleChangeName,
    handleChange,
    handleTypesChange,
    handleDeleteTypes,
    typesSelected,
    handleCheck,
    handleSubmit,
    handleReset,
  } = useForm(initialForm, initialTypes, validateForm);

  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  if (allTypes.length === 0) {
    dispatch(getTypes());
  }
  window.scrollTo(0, 0);

  return (
    <Fragment>
      <div className="formdivcontainer">
        {!edit && <NavBar />}
        <div className="formcontainer">
          {loader && <Loader />}
          <h2>{edit ? "EDIT YOUR POKEMON" : "CREATE YOUR POKEMON"}</h2>
          <form className="form" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="divname">
              <label className="label" htmlFor="name">
                NAME:{" "}
              </label>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="name..."
                onBlur={handleBlur}
                onChange={handleChangeName}
                value={pokeForm.name}
                required></input>
              {errors.name && <p className="errormessage">{errors.name}</p>}
            </div>
            {/*TITLE*/}
            <div className="formtitle">
              <div className="formicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-settings">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>

              <h4 className="formlabel">HIT POINTS & STATS</h4>
              <div className="formlink">
                <a
                  href="https://pokemon.fandom.com/wiki/HP"
                  target="_blank"
                  rel="noopener noreferrer">
                  <p className="linkmessage">
                    more info about hit points & pokemons stats
                  </p>
                </a>
              </div>
            </div>
            {/* HP & STATS CONTAINER */}
            <div className="divgrid">
              {/* HP */}
              <div className="divhp">
                <label htmlFor="hp">HIT POINTS:</label>
                <input
                  className="inputstats"
                  type="number"
                  name="hp"
                  id="name"
                  placeholder="hit points..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={pokeForm.hp}
                  required></input>
                {errors.hp && <p className="errormessage">{errors.hp}</p>}
              </div>
              {/* ATTACK */}
              <div className="divattack">
                <label htmlFor="attack">ATTACK:</label>
                <input
                  className="inputstats"
                  type="number"
                  name="attack"
                  id="attack"
                  placeholder="attack..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={pokeForm.attack}
                  required></input>
                {errors.attack && (
                  <p className="errormessage">{errors.attack}</p>
                )}
              </div>
              {/* DEFENSE */}
              <div className="divdefense">
                <label htmlFor="defense">DEFENSE:</label>
                <input
                  className="inputstats"
                  type="number"
                  name="defense"
                  id="defense"
                  placeholder="defense..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={pokeForm.defense}
                  required></input>
                {errors.defense && (
                  <p className="errormessage">{errors.defense}</p>
                )}
              </div>
              {/* SPEED */}
              <div className="divspeed">
                <label htmlFor="speed">SPEED:</label>
                <input
                  className="inputstats"
                  type="number"
                  name="speed"
                  id="speed"
                  placeholder="speed..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={pokeForm.speed}
                  required></input>
                {errors.speed && <p className="errormessage">{errors.speed}</p>}
              </div>
              {/* HEIGHT */}
              <div className="divheight">
                <label htmlFor="height">HEIGHT:</label>
                <input
                  className="inputstats"
                  type="number"
                  name="height"
                  id="height"
                  placeholder="height..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={pokeForm.height}
                  required></input>
                {errors.height && (
                  <p className="errormessage">{errors.height}</p>
                )}
              </div>
              {/* WEIGHT */}
              <div className="divweight">
                <label htmlFor="weight">WEIGHT:</label>
                <input
                  className="inputstats"
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="weight..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={pokeForm.weight}
                  required></input>
                {errors.weight && (
                  <p className="errormessage">{errors.weight}</p>
                )}
              </div>
            </div>
            {/*TITLE*/}
            <div className="formtitle">
              <div className="formicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-settings">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>

              <h4 className="formlabel">POKEMONS TYPES</h4>

              <div className="formlink">
                <a
                  href="https://www.wikidex.net/wiki/Tipo"
                  target="_blank"
                  rel="noopener noreferrer">
                  <p className="linkmessage">more info about pokemons types</p>
                </a>
              </div>
            </div>
            <div className="formsubtitle">
              <p>
                CHOOSE UP TO 2 TYPES WHICH DEFINE YOUR POKEMON CHARACTERISTICS
              </p>
            </div>
            {/* TYPE */}
            <Formtypes
              allTypes={allTypes}
              typesSelected={typesSelected}
              handleTypesChange={handleTypesChange}
              types={pokeForm.types}
              handleDeleteTypes={handleDeleteTypes}
              errors={errors.types}
            />
            {/*TITLE*/}
            <div className="formtitle">
              <div className="formicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-settings">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>

              <h4 className="formlabel">POKEMONS IMAGE</h4>

              <div className="formlink">
                <p className="linkmessage">option to select a pokemons image</p>
              </div>
            </div>

            {/* IMAGE */}

            <div className="divimg">
              <fieldset>
                <legend>SELECT YOUR IMAGE:</legend>
                <div className="imgcontainer">
                  <div className="formimgdiv">
                    <label htmlFor="img1">
                      <img
                        className="formimg"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
                        alt="img not found"
                      />
                    </label>
                    <input
                      type="radius"
                      name="img"
                      id="img1"
                      onClick={handleCheck}
                      value={
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
                      }></input>
                  </div>
                  <div className="formimgdiv">
                    <label htmlFor="img2">
                      <img
                        className="formimg"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
                        alt="img not found"
                      />
                    </label>
                    <input
                      type="radius"
                      name="img"
                      id="img2"
                      onClick={handleCheck}
                      value={
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
                      }></input>
                  </div>
                  <div className="formimgdiv">
                    <label htmlFor="img3">
                      <img
                        className="formimg"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
                        alt="img not found"
                      />
                    </label>
                    <input
                      type="radius"
                      name="img"
                      id="img3"
                      onClick={handleCheck}
                      value={
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
                      }></input>
                  </div>
                </div>
                {errors.img && <p className="errormessage">{errors.img}</p>}
              </fieldset>
              <div className="formsubtitle">
                <p>YOU HAVE CHOSEN:</p>
                <ul>
                  {pokeForm.img?.includes("110") ? (
                    <li>weezing' image</li>
                  ) : pokeForm.img?.includes("120") ? (
                    <li>staryu' image</li>
                  ) : pokeForm.img?.includes("130") ? (
                    <li>gyarados' image</li>
                  ) : (
                    <li> </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="formbuttonsdiv">
              <button className="formbuttonsubmit" type="submit">
                CREATE
              </button>

              <button
                className="formbuttonreset"
                type="reset"
                onClick={handleReset}>
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
