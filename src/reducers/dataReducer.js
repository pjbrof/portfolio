import cardData from '../sources/cardData.json';

export default function reducer(
  state = {
    cards: cardData,
    filters: ['All', 'React', 'JavaScript', 'Sass', 'Node', 'MySQL'],
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
