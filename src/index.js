import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Categories from './components/categories.jsx'
import Products from './components/products.jsx'

import store from './store'

import { Provider } from 'react-redux';

import './index.scss'

const App = () => {
  return (
    < >
    <Provider store={store}>
    <Header />
    <Categories />
    <Products />
    <Footer />
    </Provider>
    </>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
