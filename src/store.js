import {createStore, applyMiddleware, compose} from 'redux';
// eslint-disable-next-line
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';


const initialState = {};

const middleware = [thunk];

//const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //devTools
  )
);

export default store;
