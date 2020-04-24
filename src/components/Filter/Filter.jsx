import React from 'react';
import { connect } from 'react-redux';

import './Filter.scss';

import { setFilter } from '../../actions/dataActions';

// eslint-disable-next-line react/prefer-stateless-function
class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilter(e) {
    e.preventDefault();
    this.props.setFilter(e.currentTarget.getAttribute('data-filter'));
  }

  render() {
    const { filters, activeFilter } = this.props;
    return (
      <div className="filter">
        <h3>Filter:</h3>
        <div className="filter-items">
          {filters.map((value, index) => (
            <a href="#" key={index}>
              <img
                src={value.img}
                className="filter-item"
                data-filter={value.name}
                alt={`filter by ${value.name}`}
                onClick={this.handleFilter.bind(this)}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {
  setFilter
};

export default connect(mapStateToProps, mapActionsToProps)(Filter);
