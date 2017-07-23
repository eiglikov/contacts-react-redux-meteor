import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const GroupButton = ({ group, toggleModal }) => (
  <Link to={`/group/${group}`} onClick={toggleModal}>
    <label className='btn btn-primary first-uppercase'>
      {group}
    </label>
  </Link>
)

GroupButton.PropTypes = {
  group: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired
}

export default GroupButton
