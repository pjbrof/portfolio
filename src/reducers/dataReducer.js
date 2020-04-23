import cardData from '../sources/cardData.json';

import { d3js, html5, javascript, reactlogo, sass, node, mysql } from '../img';

export default function reducer(
  state = {
    cards: cardData,
    filters: [
      {
        name: 'All',
        img: html5
      },
      {
        name: 'react',
        img: reactlogo
      },
      {
        name: 'd3js',
        img: d3js
      },
      {
        name: 'javascript',
        img: javascript
      },
      {
        name: 'sass',
        img: sass
      },
      {
        name: 'nodejs-icon',
        img: node
      },
      {
        name: 'mysql',
        img: mysql
      }
    ],
    activeFilter: 'All',
    error: null
  },
  action
) {
  switch (action.type) {
    case 'FETCH_INFO_FULFILLED': {
      return { ...state, data: action.payload };
    }
    case 'FETCH_INFO_REJECTED': {
      return { ...state, error: action.payload };
    }
    case 'SET_ACTIVE_FILTER': {
      return { ...state, activeFilter: action.payload };
    }
    default: {
      return state;
    }
  }
}
