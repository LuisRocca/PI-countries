import axios from 'axios';
export const COUNTRIES = 'COUNTRIES';
export const BY_CONTINENTS = 'BY_CONTINENTS';

export function getAllCountries(){
    return async function(dispatch) {
        const res = axios('http://localhost:3001/countries')
        return dispatch({
            type: COUNTRIES,
            payload: (await res).data
        })
    }
}

export function byContinents(payload) {
  return {
      type: BY_CONTINENTS,
      payload
  }
}