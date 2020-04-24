import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cards.scss';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.cards.cards
      .filter(value => {
        if (this.props.activeFilter !== 'All') {
          return value.tech.includes(this.props.activeFilter);
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
    return <div className="cards">{cards}</div>;
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Cards);
