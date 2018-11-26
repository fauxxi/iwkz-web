import {createStore, applyMiddleware, compose} from 'redux';
// eslint-disable-next-line
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';


const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
