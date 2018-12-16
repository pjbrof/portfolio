import React from 'react';
import Filter from '../Filter/Filter';

import './Sidebar.scss';
import Twitter from '../../img/Twitter.svg';
import Github from '../../img/github-octocat.svg';
import Codepen from '../../img/codepen-icon.svg';

// eslint-disable-next-line react/prefer-stateless-function
export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar shadow">
        <h1 className="name">Patrick Brophy</h1>
        <p className="title">Senior Front-End Engineer for John Hancock</p>
        <h3>Resume:</h3>
        <button>PDF</button>
        <button>Word</button>
        <br />
        <h3>Contact:</h3>
        <a href="#">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="#">
          <img src={Github} alt="Github" />
        </a>
        <a href="#">
          <img src={Codepen} alt="Codepen" />
        </a>
        <Filter />
      </div>
    );
  }
}
