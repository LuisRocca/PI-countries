import {
  COUNTRIES,
  BY_CONTINENTS,
  BY_ACTIVITY,
  ALPHABETICAL_ORDER,
  POPULATION_ORDER,
  SEARCH,
  CREATE_ACTIVITY,
  GET_DETAIL,
  SET_LOADING,

} from "../action";

const initialState = {
  loading: false,
  countries: [],
  copiaCountries: [],
  detail: [],
};

const rooRducer = (state = initialState, action) => {
  
  switch (action.type) {
   
    case CREATE_ACTIVITY:
      return {
        ...state
      }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        copiaCountries: action.payload,
        loading: false,
      };
    case SEARCH:
        return {
            ...state,
            countries: action.payload
        };
    case SET_LOADING:
        return {
          ...state,
          loading: action.payload
        }
    case BY_CONTINENTS:
      const allCountries = state.copiaCountries;
      const continentsFlitred =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((i) => i.continents === action.payload);
      return {
        ...state,
        countries: continentsFlitred,
      };
    case BY_ACTIVITY:      
        const copia = state.copiaCountries;
        const filterByActivity = action.payload === 'Nothing' ? copia :
        copia.filter(i => i.activities.length > 0 )
        return { 
            ...state,
            countries: filterByActivity
        }
    case POPULATION_ORDER:
        const orderByPopulation =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderByPopulation,
      };
    case ALPHABETICAL_ORDER:
      const orderByName =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderByName,
      };
    default:
      return state;
  }
};

export default rooRducer;
