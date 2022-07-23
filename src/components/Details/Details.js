//======LIBRARIES & DEPENDENCIES
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//======OUR COMPONENTS
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";

//======OUR FUNCTIONS
import { clearDetail, deletePokemon, getPokeByName } from "../../redux/actions";

//======STYLE & IMAGES
import "./Details.css";
import Swal from "sweetalert2/src/sweetalert2";

export default function Details({ setPokemonDeleted }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { name } = useParams();
  const [loader, setLoader] = useState(true);
  const [edit, setEdit] = useState(false);
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  //IF YOU REFRESH, YOU WILL SEE POKEMON DETAIL BECAUSE OF THIS REQUEST
  useEffect(() => {
    dispatch(getPokeByName(name));
  }, [dispatch, name]);

  useEffect(() => {
    return () => {
      dispatch(clearDetail());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "This pokemon will be deleted!",
      icon: "warning",
      showCancelButton: true,
      background: "#444444d2",
      color: "#dedede",
      confirmButtonColor: "#222121",
      cancelButtonColor: "#222121",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let pokeId = pokemonDetail[0].id;
        dispatch(deletePokemon(pokeId));
        setPokemonDeleted(true);
        Swal.fire("Pokemon Deleted!", `Pokemon has been deleted.`, "success");
        navigate(-1);
        dispatch(clearDetail());
      } else {
        return;
      }
    });
  }
  function handleEdit() {
    setEdit(true);
  }

  if (pokemonDetail.length > 0 && loader) {
    setLoader(false);
  }

  window.scrollTo(0, 0);

  return (
    <Fragment>
      <div className="detailscontainer">
        <NavBar />
        <section className="detailssection">
          {pokemonDetail.length > 0 && !loader ? (
            pokemonDetail.map((p) => {
              return (
                <div className="detailscard" key={p.id}>
                  {/*IMAGE */}
                  <img className="detailsimg" src={p.img} alt="img not found" />
                  {/*NAME, ID, TYPE, HP, ATTACK, DEFENSE, SPEED, HEIGHT, WEIGHT  */}
                  <div className="detailsstats">
                    <h3 className="detailsname">{p.name.toUpperCase()}</h3>
                    <p className="detailsp">{`ID: ${p.id}`}</p>
                    <p className="detailsp">TYPE:</p>
                    {p.types?.map((t) => {
                      return (
                        <p className="detailstype" key={t}>
                          {t}
                        </p>
                      );
                    })}
                    <p className="detailsp">{`HIT POINTS: ${p.hp}`}</p>
                    <p className="detailsp">{`ATTACK: ${p.attack}`}</p>
                    <p className="detailsp">{`DEFENSE: ${p.defense}`}</p>{" "}
                    <p className="detailsp">{`SPEED: ${p.speed}`}</p>
                    <p className="detailsp">{`HEIGHT: ${p.height}`}</p>{" "}
                    <p className="detailsp">{`EIGHT: ${p.weight}`}</p>
                    <p className="detailsp">
                      {p.creator ? `CREATOR: USER` : `CREATOR: POKEAPI`}
                    </p>
                  </div>
                  <div className="detailsbuttonscontainer">
                    {/* DELETE BUTTON */}
                    <div className="detailsbuttondiv">
                      <button className="detailsbutton" onClick={handleDelete}>
                        DELETE
                      </button>
                    </div>
                    {/* EDIT BUTTON */}
                    <div className="detailsbuttondiv">
                      <button className="detailsbutton" onClick={handleEdit}>
                        EDIT
                      </button>
                      {/* <small>
                        be patient, edit funcionality is coming soon
                      </small> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : !pokemonDetail.length && loader ? (
            <Loader />
          ) : (
            <Message />
          )}
          {edit && <Form edit={edit}></Form>}
        </section>
      </div>
    </Fragment>
  );
}
