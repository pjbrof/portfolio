import React from 'react';
import { connect } from 'react-redux';

import './Filter.css';

import { setFilter } from '../../actions/dataActions';

const Filter = ({ filters }) => {
  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.currentTarget.getAttribute('data-filter'));
  };

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
              onClick={() => handleFilter()}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => store.data;

const mapActionsToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapActionsToProps)(Filter);
