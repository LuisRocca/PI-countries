import React from 'react';
import { StyledPaginado } from './StyledPaginado';

const Paginado = ({countries, couPerPage, paginado}) => {

    const pageNumber = [];

    for(let i = 1; i<= Math.ceil(countries/couPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <StyledPaginado>          
           <nav>
               <ul>
                   {
                       pageNumber && pageNumber.map( n => (
                           <li key={n}>
                               <a onClick={() => paginado(n)} >{n}</a>
                           </li>
                       ))
                   }
               </ul>
           </nav>
        </StyledPaginado>
    )
}

export default Paginado
