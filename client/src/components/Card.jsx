import React from 'react'

const Card = ({name, image, continents}) => {
    return (
        <>
         <img src={image} alt='bandera del pais' width='200px' height='250px' />
            <h1>{name}</h1>
            <h2>{continents}</h2>        
        </>
    )
}

export default Card
