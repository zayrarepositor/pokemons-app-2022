//======LIBRARIES & DEPENDENCIES
import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

//======OUR COMPONENTS

//======OUR FUNCTIONS
import { getApiPokemons } from "../../redux/actions/index";
//======STYLE & IMAGES
import "./LandingPage.css";
import poliwhirl from "./img/poliwhirl.png";
import kadabra from "./img/kadabra.png";
import golem from "./img/golem.png";
import weepinbell from "./img/weepinbell.png";
import squirtle from "./img/squirtle.png";
import butterfree from "./img/butterfree.png";
import sandslash from "./img/sandslash.png";
import spearow from "./img/spearow.png";
import venusaur from "./img/venusaur.png";

export default function LandingPage() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (pokemons.length < 1) {
      dispatch(getApiPokemons(50));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  return (
    <Fragment>
      <section className="lpgrid">
        <figure>
          <img src={poliwhirl} alt="..." />
          <figcaption>
            <div>
              <div>
                <h3>POLIWHIRL</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="lpfigbutton">
          <NavLink to="/home">
            <button
              type="button"
              disabled={message !== "db full"}
              className="lpbutton">
              HOME
            </button>
          </NavLink>
        </figure>
        <figure>
          <img src={kadabra} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>KADABRA</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={sandslash} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>SANDSLASH</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={weepinbell} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>WEEPINBELL</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={squirtle} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>SQUIRTLE</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={butterfree} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>BUTTERFREE</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={golem} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>GOLEM</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={spearow} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>SPEAROW</h3>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={venusaur} alt="" />
          <figcaption>
            <div>
              <div>
                <h3>VENUSAUR</h3>
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
    </Fragment>
  );
}
