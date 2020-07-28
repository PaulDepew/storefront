' use strict';


const dummyProducts =[
  {
    category:'Electronics',
    name:'Macbook Pro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$1999.99',
    count: '10',
  },
  {
    category:'Food',
    name:'Apples',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$2.99',
    count: '100',
  },
  {
    category:'Wine',
    name:'Pinot Grigio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$.99',
    count: '1050',
  },
  {
    category:'Bears',
    name:'Smokey the,',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$29.99',
    count: '0',
  },
];

const dummyCategories = [
  {
    category: 'Electronics',
    displayName:'Electric Slide',
    description:'Lorem ipsum dolor sit amet, consectetur adiaouenaeobinit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    category: 'Food',
    displayName:'Consumables',
    description:'Loadlvjnevbonr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    category: 'Wine',
    displayName:'Vino',
    description:'Loqe;onqegqnoolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    category: 'Bears',
    displayName:'BEARS!',
    description:'Lorqe;ojnqegpqoihn sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

const initialState = {
  categories: [
    ...dummyCategories,
  ],
  activeCategory: '',
  products: [
    ...dummyProducts,
  ],
};

export default (state= initialState, action) => {
  const {type, payload} = action;

    // console.log(`Type:: ${type}, Payload:: ${payload}`);
  switch (type) {
  case 'ACTIVE CATEGORY':
    // console.log(payload);
    return {
      ...state, activeCategory: payload,
    };
  default: 
    return state;
  }
};

export const setActiveCategory = (category) => {
  // console.log(`setActiveCategory ${category}`);
  return {
    type: 'ACTIVE CATEGORY',
    payload: category,
  };
};




