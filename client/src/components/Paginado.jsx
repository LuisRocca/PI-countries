import React from 'react';

const Paginado = ({countries, couPerPage, paginado}) => {

    const pageNumber = [];

    for(let i = 1; i<= Math.ceil(countries/couPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div>          
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
        </div>
    )
}

export default Paginado
