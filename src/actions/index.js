const axios = require('axios');
export const FETCH_ACTOR_RESULTS = 'FETCH_ACTOR_RESULTS';

export function fetchActorResults(actor) {
  return {
    FETCH_ACTOR_RESULTS,
    payload: request
  }
}
