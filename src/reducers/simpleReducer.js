export default (state = {
  isLoaded: false
}, action) => {
  switch (action.type){
    case 'POST_LOADED':
    return {
      result: {...state, isLoaded: action.payload}
    }
    default:
    return state
  }
}
