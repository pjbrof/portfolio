import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Details.scss';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.props.cards.cards.forEach(value => {
      if (value.title.toLowerCase().replace(/\s+/g, '-') === this.props.match.params.id) {
        this.setState({
          data: value
        });
      }
    });
  }
  render() {
    const { title, gif, link } = this.state.data;
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <br />
        <br />
        <a className="button" href={link} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    );
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Details);
