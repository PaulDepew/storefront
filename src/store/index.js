import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import category from './categories.jsx';
import cart from './cart.jsx';

let reducers = combineReducers({ category, cart });

let store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();