import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root')
);

registerServiceWorker();
