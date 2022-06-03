import { createSlice } from '@reduxjs/toolkit';
import cardData from '../sources/cardData.json';
import { d3js, html5, javascript, reactlogo, sass, node, mysql } from '../icons';

const initialState = {
  cards: cardData,
  filters: [
    {
      name: 'All',
      img: html5,
    },
    {
      name: 'react',
      img: reactlogo,
    },
    {
      name: 'd3js',
      img: d3js,
    },
    {
      name: 'javascript',
      img: javascript,
    },
    {
      name: 'sass',
      img: sass,
    },
    {
      name: 'nodejs-icon',
      img: node,
    },
    {
      name: 'mysql',
      img: mysql,
    },
  ],
  activeFilter: 'All',
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchInfo: (state) => {
      fetch('/', { method: 'GET' })
        .then((res) => {
          state.data = res;
        })
        .catch((err) => {
          state.error = err;
        });
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { fetchInfo, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
