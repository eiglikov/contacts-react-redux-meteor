import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FilterLink = ({ filter, children }) => {
  // activeStyle={{
  //   textDecoration: 'none',
  //   color: 'black',
  // }}
  return(
    <Link
      to={filter === 'all' ? '' : filter}
    >
      {children}
    </Link>
    )
  }

  FilterLink.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.any,
  }

  export default FilterLink;
