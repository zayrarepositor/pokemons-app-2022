//======LIBRARIES & DEPENDENCIES

//======OUR COMPONENTS

//======OUR FUNCTIONS

//======STYLE & IMAGES
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import React from "react";
import "./Row.css";
import Details from "../Details/Details";
import { getPokeByName } from "../../redux/actions";

export default function Row({
  setPokemonDeleted,
  name,
  hp,
  img,
  types,
  attack,
  creator,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokeByName(name));
    navigate(`/home/${name}`);
    /*  //setPage(1); */
  }

  return (
    <Fragment>
      <div className="card">
        {/*IMAGE */}
        <img className="cardimg" src={img} alt="img not found" />
        {/*NAME, HP, TYPE */}
        <h3 className="cardname">{name.toUpperCase()}</h3>
        {types?.map((t) => {
          return (
            <p className="cardtype" key={t}>
              {t}
            </p>
          );
        })}

        <p className="cardhp">{`HIT POINTS: ${hp}`}</p>
        <p className="cardp">{`ATTACK: ${attack}`}</p>
        <p className="cardp">
          {creator ? `CREATOR: USER` : `CREATOR: POKEAPI`}
        </p>
        {/*MORE INFO BUTTON*/}
        <div className="cardbuttondiv">
          <NavLink
            to={`/home?name=${name}`}
            element={<Details setPokemonDeleted={setPokemonDeleted} />}>
            <button className="cardbutton" onClick={handleClick}>
              MORE INFO
            </button>
          </NavLink>
        </div>
        {/*         <button onClick={() => setPokeToEdit(p)}>editar</button>
        <button onClick={() => deletePoke(id)}>eliminar</button>
 */}
      </div>
    </Fragment>
  );
}
