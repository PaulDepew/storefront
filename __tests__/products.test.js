  
import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import Products from '../components/products.js';
import { Provider } from 'react-redux';
import store from '../components/store';

describe('Product tests', () => {

  it('renders correctly', () => {
    const DOM = renderer.create(<Provider store={store}><Products/></Provider>).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});