import React from 'react';
import PropTypes from 'prop-types';
import FilterByName from './FilterByName';

const Filters = (props) => {
  // prevent submit form
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  const { handleFilter } = props;
  return (
    <section className="filter">
      <h2 className="filter__title">Character!</h2>
      <form className="filter__list" onSubmit={handleForm}>
        <FilterByName handleFilter={handleFilter} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
