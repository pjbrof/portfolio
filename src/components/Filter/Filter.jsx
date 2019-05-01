import React from 'react';
import { connect } from 'react-redux';

import './Filter.scss';

import { setFilter } from '../../actions/dataActions';

// eslint-disable-next-line react/prefer-stateless-function
class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    e.preventDefault();
    this.props.setFilter(e.currentTarget.alt);
  }

  render() {
    const { filters } = this.props;
    return (
      <div className="filter">
        <h3>Filter:</h3>
        {filters.map((value, index) => (
          <a href="#" key={index}>
            <img src="" className="filter-item" alt={value} onClick={this.handleFilter} />
          </a>
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Filter);
