// == Import: NPM
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Import: local
import reducer from './reducer';
import authMiddleware from './middlewares/authMiddleware';

// == Config, in case of too many reducers, better to set those outside and import
const enhancers = composeWithDevTools(applyMiddleware(authMiddleware));

// == store, in case of multiple reducers, combine outside and import
const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
