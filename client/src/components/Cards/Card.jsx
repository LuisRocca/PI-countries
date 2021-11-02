import React from "react";
import { StyledCards } from "./StyledCards";

const Card = ({ name, image, continents, key }) => {
  return (
    <StyledCards>
      <div className="contImg">
        <img src={image} />
      </div>
      <div className="info">
        
          <h1>{name}</h1>
        
        <div className="contenedor">
          <h2> Continent </h2>
          <h2>{continents}</h2>
        </div>
      </div>
    </StyledCards>
  );
};

export default Card;
