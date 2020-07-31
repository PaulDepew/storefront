import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Categories from './components/categories.jsx'
import Products from './components/products.jsx'
import SimpleCart from './components/simpleCart.jsx'
import ShoppingCart from './components/shoppingCart.jsx';
import ProductDetails from './components/productDetails.jsx';


import store from './store'

import { Provider } from 'react-redux';

import Container from '@material-ui/core/Container'

import './index.scss'

const App = () => {
  return (
    < >
    <Provider store={store}>
    <BrowserRouter  >
    <Header />
      <Route exact path="/" >
    <Container fluid>
    <Categories />
    <SimpleCart />
    </Container>
    <Products />
      </ Route>
      <Route exact path="/details">
      <SimpleCart />
        <ProductDetails />
      </Route>
      <Route exact path="/shoppingcart">
        <ShoppingCart />
      </Route>
    <Footer />
    </BrowserRouter>
    </Provider>
    </>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
