import API_KEY from '../APIConfig';
const axios = require('axios');
const ROOT_URL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&include_adult=false`;
export const FETCH_ACTOR_RESULTS = 'FETCH_ACTOR_RESULTS';

export function fetchActorResults(actor) {
  const url = `${ROOT_URL}&query=${actor}`;
  const request = axios.get(url);

  return {
    type: FETCH_ACTOR_RESULTS,
    payload: request
  };
}
