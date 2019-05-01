import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cards.scss';
import d3Logo from '../../img/d3.svg';

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
          <Link to={`/g/${index}`} key={index}>
            <div className="card" style={{ backgroundImage: `url(${value.gif})` }}>
              <h2>{value.title}</h2>
              <ul>
                <li>
                  <img src={d3Logo} alt="d3js" />
                </li>
              </ul>
            </div>
          </Link>
        );
      });
    return <div className="cards">{cards}</div>;
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Cards);
