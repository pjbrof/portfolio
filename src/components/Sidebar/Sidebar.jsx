import React from 'react';
import Filter from '../Filter/Filter';

import './Sidebar.scss';
import Twitter from '../../img/twitter.svg';
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
    window.location = './resumes/PatrickBrophy_Resume.pdf';
  }

  handleWord() {
    window.location = './resumes/PatrickBrophy_Resume.docx  ';
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
        <div className="contact">
          <h3>Contact:</h3>
          <div className="contact-links">
            <a href="https://twitter.com/pjbrof" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter for pjbrof" />
            </a>
            <a href="https://github.com/pjbrof" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github Profile" />
            </a>
            <a href="https://codepen.io/pjbrof/" target="_blank" rel="noopener noreferrer">
              <img src={Codepen} alt="Codepen Profile" />
            </a>
          </div>
        </div>
        <Filter />
      </div>
    );
  }
}
