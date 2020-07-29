'use strict';

const initialState = [];

export default (state= initialState, action) => {
  const {type, payload} = action;


  switch (type) {
  case 'ADD TO CART':
    return [...state, payload];
  case 'REMOVE FROM CART':
    for(let i=0; i<= state.length; i++){
      if(state[i].name === payload.name){
        state.splice(i,1);
      }
      return [...state];
    }
    return state;
  case 'RESET': 
    return initialState;
  default: 
    return state;
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD TO CART',
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE FROM CART',
    payload: product,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};