import {FETCH_POSTS, IS_LOADED, FETCH_DOCS, FETCH_JADWAL} from '../actions/types';

const initialState = {
  posts: [],
  docs: [],
  jadwal: [],
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
    case FETCH_DOCS:
      return{
        ...state,
        docs: action.payload
      }
    case FETCH_JADWAL:
      return{
        ...state,
        jadwal: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
