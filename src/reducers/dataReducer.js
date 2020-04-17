import cardData from '../sources/cardData.json';

import html5Img from '../img/html-5.svg';
import reactImg from '../img/react.svg';
import javascriptImg from '../img/javascript.svg';
import sassImg from '../img/sass.svg';
import nodeImg from '../img/nodejs-icon.svg';
import mysqlImg from '../img/mysql.svg';

export default function reducer(
  state = {
    cards: cardData,
    filters: [
      {
        name: 'All',
        img: html5Img
      },
      {
        name: 'React',
        img: reactImg
      },
      {
        name: 'JavaScript',
        img: javascriptImg
      },
      {
        name: 'Sass',
        img: sassImg
      },
      {
        name: 'Node',
        img: nodeImg
      },
      {
        name: 'MySQL',
        img: mysqlImg
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
