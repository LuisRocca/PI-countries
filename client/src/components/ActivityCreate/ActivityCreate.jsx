import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/action";
import { StyledActivity } from "./StyledActivity";
import Modal from "./Modal";


const validator = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "the activity needs to have a name"
  }
  if (!input.difficulty) {
    errors.difficulty = "needs to have a level of difficulty"
  }
  if (input.duration < 1)  {
    errors.duration = "at least you have to speculate that it will last an hour"
  }
  if (!input.season) {
    errors.season = "you must choose a season"
  }
  return errors
}

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const country = useSelector((e) => e.countries);
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState( false )
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
    setErrors(validator({
      ...input,
      [e.target.name]: e.target.value,
    
    }))
  };

  const handleCheck = (e) => {

    setInput({
      ...input,
      season: e.target.value
    });
    setErrors(validator({
      ...input,
      season: e.target.value
    }))
   
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
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countriesId: [],
      })
      setShowModal(true)
    
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
        {
          showModal && <Modal  setShowModal={setShowModal} showModal={showModal} />
        }
        
        <form onSubmit={e => handleSubmit(e)} > 
          <div>
            <label>Nombre : </label>
            <input
              required
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            ></input>
            {
              errors.name && (<p>{errors.name} <i className="fas fa-exclamation-triangle"></i></p>)
            }
          </div>
          <div className="select" >
            <label>Difficulty : </label>
             <select required onChange={(e) => handleChange(e)} name="difficulty" id="">
                <option value="">Difficulty </option>
                <option value="1">Level of Difficulty 1 </option>
                <option value="2">Level of Difficulty 2 </option>
                <option value="3">Level of Difficulty 3 </option>
                <option value="4">Level of Difficulty 4 </option>
                <option value="5">Level of Difficulty 5 </option>
             </select>  
             {
              errors.difficulty && (<p>{errors.difficulty} <i className="fas fa-exclamation-triangle"></i></p>)
            }        
          </div>
          <div>
            <label>Duration : </label>
            <input
             required
             placeholder="place the hours of duration"
              type="number"
              value={ input.duration }
              name="duration"
              onChange={(e) => handleChange(e)}
            ></input>
             {
              errors.duration && (<p>{errors.duration} <i className="fas fa-exclamation-triangle"></i></p>)
            }
          </div>
          <div>
            <h2>Season</h2>
          </div>
          <div className='select' >

            <label>
              <select required onChange={(e) => handleCheck(e)} >
                <option value="" >Select season</option>
                <option value="Verano" >Verano</option>
                <option value="Otoño" >Otoño</option>
                <option value="Invierno" >Invierno</option>
                <option value="Primavera" >Primavera</option>
              </select>
             </label>
            
             {
              errors.season && (<p>{errors.season} <i className="fas fa-exclamation-triangle"></i></p>)
            }

            </div>
          <div className='select' >
          <select required onChange={(e) => handleSelect(e)}>
            <option>select countries</option>
            { country.map((i) => (
              <option value={i.id}>{i.name}</option>
              ))
            }
          </select>
          </div>
          <ul>
              { 
                input.countriesId.map( e => (
                       <li>{e} <button className="delete" onClick={() => deleteActivity(e)} ><i className="fas fa-times"></i></button> </li>
                    ))
                
              }
            </ul>

          <button className='submit' type="submit">Create Activities</button>
        </form>
      </div>
    </StyledActivity>
  );
};

// 
export default ActivityCreate;
