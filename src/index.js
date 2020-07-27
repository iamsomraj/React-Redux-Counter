import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import counterReducer from './store/Reducers/counterReducer';
import resultReducer from './store/Reducers/resultReducer';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Middleware dispatching', action);
  const result = next(action);
  console.log('Middleware newstate', store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
