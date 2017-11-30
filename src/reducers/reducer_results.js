import { FETCH_ACTOR_RESULTS, FETCH_ACTOR_INFO } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ACTOR_RESULTS:
      return action.payload.data.results;
    case FETCH_ACTOR_INFO:
      return action.payload.data;
    default:
      return state;
  }
}
