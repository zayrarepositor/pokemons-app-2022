//======LIBRARIES & DEPENDENCIES
import React, { Fragment } from "react";

//======OUR COMPONENTS

//======OUR FUNCTIONS

//======STYLE & IMAGES
import "./css/Formtypes.css";

export default function Formtypes(props) {
  const { allTypes, handleTypesChange, types, handleDeleteTypes, errors } =
    props;

  return (
    <Fragment>
      <div className="divtypes">
        <div className="typeselect">
          <label className="label" htmlFor="type">
            TYPE:
          </label>
          {/*TYPES:*/}
          <select
            className="select"
            name="types"
            id="type"
            onChange={handleTypesChange}
            multiple={true}
            value={types}
            required={true}>
            <option selected disabled>
              type...
            </option>
            {allTypes?.map((t) => {
              return (
                <option className="select" key={t.name} value={t.name}>
                  {t.name}
                </option>
              );
            })}
          </select>
          {errors && <p className="errormessage">{errors}</p>}
        </div>
        <div className="formsubtitle">
          <p>YOU HAVE CHOSEN:</p>
          <ul>
            {types &&
              types.map((t) => (
                <div key={t} className="typeselected">
                  <p>{t}</p>
                  <button
                    className="delbutton"
                    value={t}
                    onClick={handleDeleteTypes}>
                    x
                  </button>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
