//======LIBRARIES & DEPENDENCIES
import { React, useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//======OUR COMPONENTS
import NavBar from "../NavBar/NavBar";
import Row from "../Row/Row";
import Message from "../Message/Message";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";
import Settings from "../Settings/Settings";

//======OUR FUNCTIONS
import {
  getPokeByName,
  getPokemons,
  getTypes,
  sortByName,
  sortByAttack,
  filterByType,
  filterByCreator,
  clearMessage,
  getApiPokemons,
} from "../../redux/actions/index";

//======STYLE & IMAGES
import "./Home.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Home() {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const pokemons = useSelector((state) => state.pokemons);
  const pokeSelected = useSelector((state) => state.pokeSelected);
  const message = useSelector((state) => state.message);

  const [loader, setLoader] = useState(true);

  //const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  //A POKEMON WAS DELETED?
  const [pokemonDeleted, setPokemonDeleted] = useState(false);
  //PAGINATION
  const [page, setPage] = useState(1);
  const [input, setInput] = useState(1);

  const limit = 12;
  const pages = Math.ceil(pokeSelected.length / limit);

  const startIndex = (page - 1) * limit; // 0  // 12
  const endIndex = page * limit; // 12 // 24
  const pokePerPage = pokeSelected?.slice(startIndex, endIndex); //0-12 // 13-24

  useEffect(() => {
    if (pokemons.length < 1) {
      dispatch(getApiPokemons(50));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  useEffect(() => {
    if (message === "db full") {
      dispatch(getTypes());
      dispatch(getPokemons());
      dispatch(clearMessage());
    }
  }, [message, dispatch]);

  useEffect(() => {
    if (pokemonDeleted === true) {
      dispatch(getPokemons());
      setPokemonDeleted(false);
    }
  }, [pokemonDeleted, dispatch]);

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) {
      MySwal.fire({
        title: "write a pokemon name please",
        position: "top-right",
        icon: "warning",
        background: "#444444d2",
        color: "#dedede",
        confirmButtonColor: "#222121",
      });
    }
    dispatch(getPokeByName(name));
    navigate(`/home/${name}`);
    setName("");
    setPage(1);
    setInput(1);
  }

  function handleSortByName(e) {
    dispatch(sortByName(e.target.value));
    setPage(1);
    setInput(1);
  }

  function handleSortByAttack(e) {
    dispatch(sortByAttack(e.target.value));
    setPage(1);
    setInput(1);
  }

  function handleFilterByType(e) {
    dispatch(filterByType(e.target.value));
    setPage(1);
    setInput(1);
  }

  function handleFilterByCreator(e) {
    dispatch(filterByCreator(e.target.value));
    setPage(1);
    setInput(1);
  }

  if (pokePerPage.length > 0 && loader) {
    setLoader(false);
  }

  return (
    <Fragment>
      <div className="homedivcontainer">
        <NavBar />
        <div className="homecontainer">
          <div className="homemain">
            <Pagination
              page={page}
              setPage={setPage}
              pages={pages}
              input={input}
              setInput={setInput}
            />
            {/*POKEMONS GALLERY*/}
            <section className="homesection">
              {pokePerPage.length > 0 && !loader ? (
                pokePerPage?.map((p) => {
                  return (
                    <Row
                      setPokemonDeleted={setPokemonDeleted}
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      img={p.img}
                      types={p.types}
                      hp={p.hp}
                      attack={p.attack}
                      creator={p.createdByUser}
                    />
                  );
                })
              ) : !pokePerPage.length && loader ? (
                <Loader />
              ) : (
                <Message />
              )}
            </section>
            <Pagination page={page} setPage={setPage} pages={pages} />
          </div>
          <aside className="homeaside">
            <Settings
              handleChange={handleChange}
              name={name}
              handleSubmit={handleSubmit}
              handleSortByName={handleSortByName}
              handleSortByAttack={handleSortByAttack}
              handleFilterByType={handleFilterByType}
              handleFilterByCreator={handleFilterByCreator}
            />
          </aside>
        </div>
      </div>
    </Fragment>
  );
}
