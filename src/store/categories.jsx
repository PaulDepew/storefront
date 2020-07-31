' use strict';

import axios from 'axios';

const initialState = {
  categories: [],
  activeCategory: '',
  products: [],
  activeProduct: {},
};

export default (state= initialState, action) => {
  const {type, payload} = action;


  switch (type) {
  case'GET PRODUCTS':
    return {
      ...state, products: payload,
    };
  case 'GET CATEGORIES':
    return {
      ...state, categories:payload,
    };
  case 'ACTIVE CATEGORY':
    return {
      ...state, activeCategory: payload,
    };
  case 'ADJUST INVENTORY':
    return state.products.map(product => product.id === payload.id ? payload : product);
  case 'GET A PRODUCT':
    return {
      ...state, activeProduct: payload,
    };
  default: 
    return state;
  }
};

export const setActiveCategory = (category) => {
 
  return {
    type: 'ACTIVE CATEGORY',
    payload: category,
  };
};

export const getProducts = () => async (dispatch) => {
  let products = await axios.get(`http://localhost:3000/products/`);
  dispatch(
    {
      type: 'GET PRODUCTS',
      payload: products.data,
    });
};

export const getOneProduct = (id) => async (dispatch) => {
  let product = await axios.get(`http://localhost:3000/products/${id}`);
  dispatch(
    {
      type: 'GET A PRODUCT',
      payload: product.data,
    });
};

export const getCategories = () => async (dispatch) => {
  let categories = await axios.get('http://localhost:3000/categories');
  
  dispatch({
    type: 'GET CATEGORIES',
    payload: categories.data,
  });
};

export const adjustInventory = (product, direction) => {
  let id = product.id;
  let products ='';
  return {
    type: 'ADJUST INVENTORY',
    payload: products,
  };
};

