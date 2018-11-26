import {FETCH_POSTS} from '../actions/types';
import {IS_LOADED} from '../actions/types';

const initialState = {
  posts: [],
  isLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_POSTS:
      //console.log('POSTS reducers')
      return {
        ...state,
        posts: action.payload,
        isLoaded: true
      };
    case IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };
    default:
      return state
  }
}
