import API_KEY from '../APIConfig';
const axios = require('axios');
const INDEX_SEARCH_ROOT_URL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&include_adult=false`;
export const FETCH_ACTOR_RESULTS = 'FETCH_ACTOR_RESULTS';
export const FETCH_ACTOR_INFO = 'FETCH_ACTOR_INFO';

export function fetchActorResults(actor) {
  const url = `${INDEX_SEARCH_ROOT_URL}&query=${actor}`;
  const request = axios.get(url);

  return {
    type: FETCH_ACTOR_RESULTS,
    payload: request
  };
}

export function fetchActorInfo(id) {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_ACTOR_INFO,
    payload: request
  };
}
