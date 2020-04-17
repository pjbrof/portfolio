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
          <button>Back</button>
        </Link>
        {this.state.title}
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
