import { FETCH_ACTOR_RESULTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ACTOR_RESULTS:
      console.log(action.payload.data.results);
      return [action.payload.data.results, ...state];
    default:
      return state;
  }
}