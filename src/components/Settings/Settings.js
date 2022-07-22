import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Settings.css";
import charizard from "./img/charizard.png";
import pidgeot from "./img/pidgeot.png";
/* import {
  getTypes,
  getPokeByName,
  filterByCreator,
  filterByType,
  sortByAttack,
  sortByName,
} from "../../redux/actions/index";
 */ import Details from "../Details/Details";

export default function Settings(props) {
  const {
    handleChange,
    name,
    handleSubmit,
    handleSortByName,
    handleSortByAttack,
    handleFilterByType,
    handleFilterByCreator,
  } = props;
  const types = useSelector((state) => state.types);

  /* const types = useSelector((state) => state.types);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState(""); */

  return (
    <Fragment>
      <div className="settingsdiv1">
        <picture>
          <img className="settingsimg" src={charizard} alt="..." />
        </picture>
        <div className="settingstitlediv">
          <h3 className="settingstitle">FILTERS & SORTERS</h3>
        </div>
      </div>

      <div className="settingsdiv2">
        {/* SEARCH BY NAME */}
        <div className="settingsdiv">
          {/* SVG ICON */}
          <div className="settingsicon">
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
          <label className="settingslabel" htmlFor="searcher">
            SEARCH POKEMON BY NAME:
          </label>
          <input
            className="settingsinput"
            type="search"
            id="searcher"
            placeholder="..name.."
            onChange={handleChange}
            /* onKeyDown={(e) => {
              if (e.key === 13) handleChange(e);
            }} */
            value={name}></input>
          <div className="settingssearchbuttondiv">
            <NavLink to={`/home?name=${name}`} element={<Details />}>
              <button
                className="settingssearchbutton"
                type="submit"
                onClick={handleSubmit}>
                SEARCH
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        {/* SORT BY NAME */}
        <div className="settingsdiv">
          {/* SVG ICON */}
          <div className="settingsicon">
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

          <label className="settingslabel" htmlFor="sorterName">
            SORT BY NAME:
          </label>
          <select
            className="settingsinput"
            id="sorterName"
            defaultValue={""}
            onChange={handleSortByName}>
            <option value="">- - -</option>
            <option value="ascName">a - z</option>
            <option value="descName">z - a</option>
          </select>
        </div>

        <hr />
        {/* SORT BY ATTACK */}
        <div className="settingsdiv">
          {/* SVG ICON */}
          <div className="settingsicon">
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

          <label className="settingslabel" htmlFor="sorterAttack">
            SORT BY ATTACK:
          </label>
          <select
            className="settingsinput"
            id="sorterAttack"
            defaultValue={""}
            onChange={handleSortByAttack}>
            <option value="">- - -</option>
            <option value="ascAttack">hight</option>
            <option value="descAttack">low</option>
          </select>
        </div>
        <hr />
        {/* FILTER BY TYPE*/}
        <div className="settingsdiv">
          {/* SVG ICON */}
          <div className="settingsicon">
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
          <label className="settingslabel" htmlFor="filterType">
            FILTER BY TYPE:
          </label>
          <select
            className="settingsinput"
            id="filterType"
            defaultValue={""}
            onChange={handleFilterByType}>
            <option defaultValue={""}>- - -</option>
            <option value={"all"}>all</option>
            {types?.map((t) => {
              return (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              );
            })}
          </select>
        </div>

        <hr />
        {/* FILTER BY ORIGIN */}
        <div className="settingsdiv">
          {/* SVG ICON */}
          <div className="settingsicon">
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
          <label className="settingslabel" htmlFor="filterCreator">
            FILTER BY ORIGIN:
          </label>
          <select
            className="settingsinput"
            id="filterCreator"
            //defaultValue={""}
            onChange={handleFilterByCreator}>
            <option value="">- - -</option>
            <option value="all">all</option>
            <option value="byDb">poke api</option>
            <option value="byUser">user</option>
          </select>
        </div>
        <hr />
        <div className="settingsdiv1">
          <picture>
            <img className="settingsimg" src={pidgeot} alt="..." />
          </picture>
          <div className="settingstitlediv">
            <h3 className="settingstitle">
              WOULD YOU LIKE TO CREATE YOUR OWN POKEMON?
            </h3>
          </div>
        </div>
        <div className="settingscreatebuttondiv">
          <NavLink to="/create">
            <button className="settingscreatebutton">
              CREATE YOUR POKEMON
            </button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
