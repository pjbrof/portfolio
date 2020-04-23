import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Details.scss';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Title'
    };
  }

  componentDidMount() {
    this.props.cards.cards.forEach(value => {
      if (value.title.toLowerCase().replace(/\s+/g, '-') === this.props.match.params.id) {
        this.setState({
          title: value.title
        });
      }
    });
  }
  render() {
    return (
      <div className="details">
        <Link to="/">
          <button className="button">
            <span className="arrow">&#8592;</span> Back
          </button>
        </Link>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Details);
