import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cards.css';

const Cards = ({ cards, activeFilter }) => {
  const cardList = cards.cards
    .filter((value) => {
      if (activeFilter !== 'All') {
        return value.tech.includes(activeFilter);
      } else {
        return value;
      }
    })
    .map((value, index) => {
      return (
        <Link to={`/${value.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
          <div className="card">
            <img className="img-responsive" src={value.gif} alt="" />
            <div className="card-info">
              <h3>{value.title}</h3>
            </div>
          </div>
        </Link>
      );
    });

  return <div className="cards">{cardList}</div>;
};

const mapStateToProps = (store) => store.data;

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Cards);
