export const simpleAction = () => dispatch => {
  dispatch({
    type: 'POST_LOADED',
    payload: true
  })
}
