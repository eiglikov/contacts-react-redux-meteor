import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const GroupButton = ({ group }) => (
  <Link to={`/group/${group}`}>
    <label className='btn btn-primary first-uppercase'>
      {group}
    </label>
  </Link>
)

GroupButton.PropTypes = {
  group: PropTypes.string.isRequired
}

export default GroupButton
