import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alphabeticalOrder, byActivity, byContinents, getAllCountries, populationOrder } from '../../redux/action'
import Card from '../Cards/Card'
import Search from '../Search/Search'
import Paginado from '../Paginado/Paginado'
import {Link} from 'react-router-dom'
import { StyledHome } from './StyledHome'

const Home = () => {
 
   const dispatch = useDispatch();
   const countries = useSelector((e )=> e.countries); //estados "globales"
   const [currentPage, setCurrentPage] = useState(1);
   const [couPerPage, setCouPerPage] = useState(9)
   const indexlast = currentPage * couPerPage;
   const indexFirst = indexlast - couPerPage
   const allpages = countries.slice(indexFirst, indexlast)

   const [orderName, setOrderName] = useState('')
   const [orderPopulation, setOrderPopulation] = useState('')

   const handleOrderN = (e) => {
      e.preventDefault()
      dispatch(alphabeticalOrder(e.target.value))
      setCurrentPage(1);
      setOrderName(`Ordenado ${e.target.value}`)
   }

   const handleOrderP = (e) => {
    e.preventDefault()
    dispatch(populationOrder(e.target.value))
    setCurrentPage(1);
    setOrderPopulation(`Ordenado ${e.target.value}`)
   }

   const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
   }

   const handleContinents = (e) => {   
       dispatch(byContinents(e.target.value))
   }

   const handleByActivity = (e) => {
       dispatch(byActivity(e.target.value))
  }

   useEffect(() => {
       dispatch(getAllCountries())
   }, [])

    return (
        <StyledHome>
            <div className="select">
            <select onChange={e => handleOrderP(e)} >
            <option value='Asc'>PopulationAsc</option>
            <option value='Des'>PopulationDes</option>
            </select>
            
            <select onChange={e => handleOrderN(e)} >
            <option value='Asc'>Asc</option>
            <option value='Des'>Des</option>
            </select>
            
            <select onChange={e => handleByActivity(e)} >
            <option value='Nothing'>Nothing</option>
            <option value="prueva1">prueva</option>
            <option value='Guia turistica por la istorial del pais'>Guia turistica por la istorial del pais</option>
            <option value='Acampado en la montaña'>Acampado en la montaña</option>
            <option value='Dias de playa en los mejores hoteles de la zona'>"Dias de playa en los mejores hoteles de la zona</option>
            </select>
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
            </div>
            <Search />

            <Paginado countries={countries.length} couPerPage={couPerPage} paginado={paginado} />
            <div className='cards-container' >
            {
                 allpages ?
                allpages.map((i) =>(
                
                    <div className="contenedor">
                    <Link to={'/detail/' + i.id} >
                    <Card  
                    key={i.id}
                     name={i.name}
                      image={i.img}
                       continents={i.continents} />
                       </Link>
                       </div>
               
                )) :
                <div>aquitoy</div>
            }
             </div>
        </StyledHome>
    )
}

export default Home
