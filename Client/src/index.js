import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,combineReducers,applyMiddleware} from "redux"
import Thunk from "redux-thunk"
import {Provider} from "react-redux"
import {singleUser,usersReducer} from "./reducers/index"
const store = createStore(combineReducers({
  user: singleUser,
  users: usersReducer
}),applyMiddleware(Thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


