import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Categories from './components/categories.jsx'
import Products from './components/products.jsx'
import SimpleCart from './components/simpleCart.jsx'

import store from './store'

import { Provider } from 'react-redux';

import Container from '@material-ui/core/Container'

import './index.scss'

const App = () => {
  return (
    < >
    <Provider store={store}>
    <Header />
    <Container fluid>
    <Categories />
    <SimpleCart />
    </Container>
    <Products />
    <Footer />
    </Provider>
    </>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
