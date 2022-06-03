import React from 'react';
import Filter from '../Filter/Filter';

import './Sidebar.css';

import Twitter from '../../icons/twitter.svg';
import Github from '../../icons/github-octocat.svg';
import Codepen from '../../icons/codepen-icon.svg';

const Sidebar = () => {
  const handlePDF = () => {
    window.location = './resumes/PatrickBrophy_Resume.pdf';
  };

  const handleWord = () => {
    window.location = './resumes/PatrickBrophy_Resume.docx';
  };

  return (
    <div className="sidebar shadow clear">
      <div className="logo">P</div>
      <h1 className="name">Patrick Brophy</h1>
      <p className="title">Senior Front-End Engineer for John Hancock</p>
      <h3>Resume:</h3>
      <div className="resumes">
        <button className="button" type="submit" onClick={handlePDF}>
          PDF
        </button>
        <button className="button" type="submit" onClick={handleWord}>
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
};

export default Sidebar;
