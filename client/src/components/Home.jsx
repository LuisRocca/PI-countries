import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byContinents, getAllCountries } from '../redux/action'
import Card from './Card'
import Paginado from './Paginado'

const Home = () => {
 
   const dispatch = useDispatch();
   const countries = useSelector(e => e.countries); //estados "globales"
   const [currentPage, setCurrentPage] = useState(1);
   const [couPerPage, setCouPerPage] = useState(9)
   const indexlast = currentPage * couPerPage;
   const indexFirst = indexlast - couPerPage
   const allpages = countries.slice(indexFirst, indexlast)

   const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
   }

   const handleContinents = (e) => {
       
       dispatch(byContinents(e.target.value))
   }

   useEffect(() => {
       dispatch(getAllCountries())
   }, [])

    return (
        <div>
            <select onChange={ e => handleContinents(e)}>
            <option value='All'>All</option>
                    <option value='South America'>South America</option>
                    <option value='North America'>North America</option>
                    <option value='Europe'>Europe</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Antarctica'>Antarctica</option>
                    
            </select>
            <Paginado countries={countries.length} couPerPage={couPerPage} paginado={paginado} />
            {
                allpages?.map(i =>
                    <Card name={i.name} image={i.img} continents={i.continents} />
                ) 
            }
        </div>
    )
}

export default Home
