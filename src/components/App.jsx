import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Cards from './Cards/Cards';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className="index">
        <Sidebar />
        <Router>
          <Cards />
        </Router>
      </div>
    );
  }
}
