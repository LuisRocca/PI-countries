import { COUNTRIES, BY_CONTINENTS } from "../action";

const initialState = {
    countries: [],
    copiaCountries: [],
}

const rooRducer = (state = initialState, action) => {
   switch(action.type) {
       case COUNTRIES:
           return {
              ...state,
              countries: action.payload,
              copiaCountries: action.payload,
           }
        case BY_CONTINENTS:
            const allCountries = state.copiaCountries;
            const continentsFlitred = action.payload == 'All' ? allCountries :
            allCountries.filter( i => i.continents === action.payload )
            return {
                 ...state,
                 countries: continentsFlitred
            }
        default:
            return state;
   }
}

export default rooRducer;