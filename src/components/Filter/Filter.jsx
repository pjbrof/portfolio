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
    const { filters, activeFilter } = this.props;
    return (
      <React.Fragment>
        <h3>Filter:</h3>
        <div className="filter">
          {filters.map((value, index) => (
            <a href="#" key={index}>
              <img
                src={value.img}
                className="filter-item"
                alt={value.name}
                onClick={this.handleFilter}
              />
            </a>
          ))}
        </div>
      </React.Fragment>
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
