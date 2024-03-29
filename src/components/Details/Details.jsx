import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Details.css';

const Details = () => {
  const [data, setData] = useState({});
  const { title, gif, link } = data;

  useEffect(() => {
    cards?.forEach((value) => {
      if (value.title.toLowerCase().replace(/\s+/g, '-') === this.props.match.params.id) {
        setData(value);
      }
    });
  }, []);

  return (
    <div className="details">
      <Link to="/">
        <button className="button">
          <span className="arrow">&#8592;</span> Back
        </button>
      </Link>
      <h1>{title}</h1>
      <img className="img-responsive" src={gif} alt={title} />
      <br />
      <br />
      <h2>Project Brief</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br />
      <br />
      <a className="button" href={link} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
};

const mapStateToProps = (store) => store.data;

export default connect(mapStateToProps, {})(Details);
