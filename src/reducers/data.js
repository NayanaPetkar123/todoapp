import {FETCH_TODOS} from '../action/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};