import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import category from './categories.jsx';

let reducers = combineReducers({ category });

let store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();