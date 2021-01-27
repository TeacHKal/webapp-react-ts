import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from "connected-react-router";
import {Provider, useDispatch} from "react-redux";
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from "./store/index";
import './index.css';
import {createAction} from "typesafe-actions";

const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
