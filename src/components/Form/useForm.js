//======LIBRARIES & DEPENDENCIES
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//======OUR COMPONENTS

//======OUR FUNCTIONS
import { createPokemon, getPokemons } from "../../redux/actions";

//======STYLE & IMAGES
import Swal from "sweetalert2";

export default function useForm(initialForm, initialTypes, validateForm) {
  const [pokeForm, setPokeForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  /*   const [response setResponse] = useState(null);
   */ const response = useSelector((state) => state.message);
  const pokemons = useSelector((state) => state.pokemons);
  const [typesSelected, setTypesSelected] = useState(initialTypes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  let pokemonsName = pokemons.map((p) => p.name);

  function handleChangeName(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (pokemonsName.includes(value)) {
      Swal.fire({
        title: "name must be unique",
        position: "top-right",
        icon: "warning",
        background: "#444444d2",
        color: "#dedede",
        confirmButtonColor: "#222121",
      });
    } else {
      setPokeForm({
        ...pokeForm,
        [name]: value,
      });
    }
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setPokeForm({
      ...pokeForm,
      [name]: value,
    });
  }

  function handleTypesChange(e) {
    e.preventDefault();
    if (!pokeForm.types.includes(e.target.value) && pokeForm.types.length < 2) {
      setPokeForm({
        ...pokeForm,
        types: [...pokeForm.types, e.target.value],
      });
    }
  }

  function handleDeleteTypes(e) {
    e.preventDefault();
    setPokeForm({
      ...pokeForm,
      types: [...pokeForm.types.filter((types) => types !== e.target.value)],
    });
  }

  function handleCheck(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setPokeForm({
      ...pokeForm,
      [name]: value,
    });
  }

  function handleBlur(e) {
    handleChange(e);
    setErrors(validateForm(pokeForm));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validateForm(pokeForm));

    if (Object.keys(errors).length === 0) {
      Swal.fire({
        title: "are you sure?",
        position: "top-right",
        icon: "question",
        background: "#444444d2",
        color: "#dedede",
        confirmButtonColor: "#222121",
      });
      setLoader(true);
      dispatch(createPokemon(pokeForm));
      setPokeForm(initialForm);
      setTypesSelected(initialTypes);
      Swal.fire({
        title: "your pokemon was created",
        position: "center",
        icon: "success",
        background: "#444444d2",
        color: "#dedede",
        confirmButtonColor: "#222121",
        timerProgressBar: true,
        timer: 5000,
      });
      setLoader(false);
    } else {
      Swal.fire({
        title: "something was wrong... try again",
        position: "center",
        icon: "error",
        background: "#444444d2",
        color: "#dedede",
        confirmButtonColor: "#222121",
      });
      return;
    }
  }

  function handleReset() {
    setPokeForm(initialForm);
  }

  return {
    pokeForm,
    setPokeForm,
    errors,
    loader,
    response,
    handleBlur,
    handleChange,
    handleCheck,
    handleSubmit,
    typesSelected,
    handleChangeName,
    handleReset,
    handleTypesChange,
    handleDeleteTypes,
  };
}
