import React from 'react';
import PropTypes from 'prop-types';
import '.././stylesheets/App.scss';

const FilterByName = (props) => {
  const { name, handleFilter } = props;

  const handleChange = (ev) => {
    handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="name">
        Name:
      </label>
      <input
        className="filter__list--input"
        type="text"
        name="name"
        id="characterSearch"
        onChange={handleChange}
        value={name}
      />
    </div>
  );
};

FilterByName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterByName;
