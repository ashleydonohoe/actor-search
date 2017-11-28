import { FETCH_ACTOR_RESULTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ACTOR_RESULTS:
      return action.payload.data.results
    default:
      return state;
  }
}
