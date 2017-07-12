import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
  // activeStyle={{
  //   textDecoration: 'none',
  //   color: 'black',
  // }}
  <Link
    to={filter === 'all' ? '' : filter}

  >
    {children}
  </Link>
)

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default FilterLink
