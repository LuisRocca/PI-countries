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
    countriesId: [],
  });
  console.log(input)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDuration = (e) => {
    setInput({
      ...input,
      duration: e.target.value 
    })
  }

  const handleCheck = (e) => {

    setInput({
      ...input,
      season: e.target.value
    });
   
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countriesId: [...input.countriesId, e.target.value],

    });
    
  };

  const deleteActivity = (id) => {
    setInput({
      ...input,
      countriesId: input.countriesId.filter(t => t !== id)
  })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createActivity(input))
      alert("Activida creado!")
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countriesId: [],
      })
  };

 

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <StyledActivity>
      <div >
        <Link to="/home">
          <button className='volver' >Volver</button>
        </Link>
        <h1>Create Activities</h1>
        <form onSubmit={e => handleSubmit(e)} > 
          <div>
            <label>Nombre : </label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            <label>Difficulty : </label>
            <input
              type="number"
              value={input.difficulty}
              name="difficulty"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            <label>Duration : </label>
            <input
              type="number"
              value={input.duration}
              name="duration"
              onChange={(e) => handleDuration(e)}
            ></input>
          </div>
          <div>
            <h2>Season</h2>
          </div>
          <div className='select' >

            <label>
              <select onChange={(e) => handleCheck(e)} >
                <option value="Verano" >Verano</option>
                <option value="Otoño" >Otoño</option>
                <option value="Invierno" >Invierno</option>
                <option value="Primavera" >Primavera</option>
              </select>
             </label>

          
          <select onChange={(e) => handleSelect(e)}>
            { country.map((i) => (
              <option value={i.id}>{i.name}</option>
              ))
            }
          </select>
          </div>
          <ul>
              { 
                input.countriesId.map( e => (
                       <li>{e} <button onClick={() => deleteActivity(e)}><i className="fas fa-times"></i></button> </li>
                    ))
                
              }
            </ul>

          <button className='submit' type="submit">Crear Activities</button>
        </form>
      </div>
    </StyledActivity>
  );
};

export default ActivityCreate;
