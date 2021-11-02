import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCoutryName } from '../../redux/action';
import { StyledSearch } from './StyledSearch';

const Search = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (e) => {
        // e.preventDefault()
        setName(e.target.value)
    }

    // const handleSubmit = () => { 
    //     // e.preventDefault()
    //    dispatch(getCoutryName(name))
    //    setName('')
    // }

    useEffect(() => {
        dispatch(getCoutryName(name))
    }, [name])

    return (
        <StyledSearch>
            <div>
            <input type='text' placeholder='Buscar...'
            onChange={e => handleChange(e)}></input>
            {/* <button type='submit' >Buscar</button> */}
        </div>
        </StyledSearch >
    )
}

export default Search
