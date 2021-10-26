const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { country_activity } = require('../db')
const { conn } = require('../db')
const { Country, Activity } = conn.models;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const { data } = await axios('https://restcountries.com/v3/all');
    const apiInfo = await data.map(country => { 
        
        return {
           id: country.cca3,
           name: country.name.common,
           img: country.flags[0],
           continents: country.continents[0],
           capital: country.capital?.[0],
           subregion: country.subregion,
           area: country.area,
           population: country.population,
        }
    });
    const countryResul = await Country.bulkCreate(apiInfo)
    return countryResul;
}

const getDb = async() => {
    return await Country.findAll({
        include: {
            model: Activity,
            attribute: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}

// const getAllCountries = async () => {
//     const countries = await getApiInfo();
//     const dbinfo = await getDb();
//     const union = countries.concat(dbinfo);
//      return union
// }


router.get('/countries' , async(req, res) => { // /countries?name=argentina
    const { name } = req.query;
        //   countries = await getApiInfo();
        let countries;
        const countryDB = await Country.count(); //aqui cuento los registros de countries
        countries = countryDB === 0 ?
        await getApiInfo() :
        await getDb()
    if ( name ) {
        const byName = countries.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
        byName.length ? 
        res.status(200).send(byName) :
        res.status(404).send('no se encontro ningun pais')
    }  else {
       res.status(200).json({resuld: countries})  
    }
      
})

router.get('/countries/:id', async (req, res) => {
    const { id } = req.params;
    const allCountries = await getDb();
    if ( id ) {
        const idCountries = allCountries.filter( i => i.id.toLowerCase() == id.toLowerCase() )
        idCountries.length?
        res.status(200).send(idCountries) :
        res.status(404).send('id no valido')
    }
})

router.post('/activity', async(req, res) => {
 let {
     name,
     difficulty,
     duration,
     season,
    countries,
 } = req.body;

 const createActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
 
 });

 if(countries) {
    //  console.log('este son los countries',countries,createActivity)
   await  createActivity.addCountries(countries) 
 }

 return res.status(200).json({mesage:'exito', createActivity })

});

module.exports = router;
