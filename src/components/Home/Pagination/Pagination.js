//======LIBRARIES & DEPENDENCIES
import React from "react";
import { Fragment } from "react";
//======OUR COMPONENTS
//======OUR FUNCTIONS
//======STYLE & IMAGES
import "./Pagination.css";

export default function Pagination({ page, setPage, pages, input, setInput }) {
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(pages) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
        setInput(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  window.scrollTo(0, 0);

  return (
    <Fragment>
      <div className="pagdiv">
        <button
          className="pagprevbutton"
          disabled={page === 1 || page < 1}
          onClick={previousPage}>
          {"<-"}
        </button>
        <input
          className="paginput"
          type="text"
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          name="page"
          autoComplete="off"
          value={input}
        />
        <p className="pagp"> de - {pages} - </p>
        <button
          className="pagnextbutton"
          disabled={page === Math.ceil(pages) || page > Math.ceil(pages)}
          onClick={nextPage}>
          {"->"}
        </button>
      </div>
    </Fragment>
  );
}
