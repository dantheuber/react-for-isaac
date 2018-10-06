import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReactDOM from 'react-dom';
import './index.css';
// import { App } from './App';
import { ToDo, CreateItem } from './todo';
import { reducer } from './reducer';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, {}, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CreateItem />
      <ToDo />
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
