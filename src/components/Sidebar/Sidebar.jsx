import React from 'react';
import Filter from '../Filter/Filter';

import './Sidebar.scss';
import Twitter from '../../img/Twitter.svg';
import Github from '../../img/github-octocat.svg';
import Codepen from '../../img/codepen-icon.svg';

// eslint-disable-next-line react/prefer-stateless-function
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handlePDF = this.handlePDF.bind(this);
    this.handleWord = this.handleWord.bind(this);
  }

  handlePDF() {
    window.location = './PatrickBrophy_Resume.pdf';
  }

  handleWord() {
    window.location = './PatrickBrophy_Resume.docx  ';
  }

  render() {
    return (
      <div className="sidebar shadow clear">
        <div className="logo">P</div>
        <h1 className="name">Patrick Brophy</h1>
        <p className="title">Senior Front-End Engineer for John Hancock</p>
        <h3>Resume:</h3>
        <div className="resumes">
          <button className="button" type="submit" onClick={this.handlePDF}>
            PDF
          </button>
          <button className="button" type="submit" onClick={this.handleWord}>
            Word
          </button>
        </div>
        <br />
        <h3>Contact:</h3>
        <div className="contact">
          <a href="https://twitter.com/pjbrof">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/pjbrof">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://codepen.io/pjbrof/">
            <img src={Codepen} alt="Codepen" />
          </a>
        </div>
        <Filter />
      </div>
    );
  }
}
