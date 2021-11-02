import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/action";
import { StyledActivity } from "./StyledActivity";

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const country = useSelector((e) => e.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  console.log(input.countries)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {

    setInput({
      ...input,
      season: e.target.value
    });
   
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],

    });
    
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createActivity(input))
      alert("Personaje creado!")
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      })
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <StyledActivity>
      <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
        <h1>Create Activities</h1>
        <form onSubmit={e => handleSubmit(e)} > 
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            <label>Difficulty:</label>
            <input
              type="number"
              value={input.difficulty}
              name="difficulty"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            <label>Duration:</label>
            <input
              type="time"
              value={input.duration}
              name="duration"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            <h3>Season</h3>
          </div>
          <div>

            <label>
              <select onChange={(e) => handleCheck(e)} >
                <option value="Verano" >Verano</option>
                <option value="Otoño" >Otoño</option>
                <option value="Invierno" >Invierno</option>
                <option value="Primavera" >Primavera</option>
              </select>
             </label>

          </div>
          <select onChange={(e) => handleSelect(e)}>
            { country.map((i) => (
              <option value={i.id}>{i.name}</option>
            ))}
            <ul>
              { 
                input.countries.map( i => (
                       <li>{i}</li>
                    ))
                    
              }
            </ul>
          </select>
          <button type="submit">Crear Activities</button>
        </form>
      </div>
    </StyledActivity>
  );
};

export default ActivityCreate;
