import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Cards from './Cards/Cards';
import Details from './Details/Details';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className="index">
        <Sidebar />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Cards} />
              <Route path="/:id" component={Details} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
