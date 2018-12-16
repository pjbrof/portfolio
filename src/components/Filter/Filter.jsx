import React from 'react';

import './Filter.scss';
import reactLogo from '../../img/react.svg';
import d3Logo from '../../img/d3.svg';

// eslint-disable-next-line react/prefer-stateless-function
export default class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <h3>Filter:</h3>
        <img src={reactLogo} alt="React" />
        <img src={d3Logo} alt="d3js" />
      </div>
    );
  }
}
