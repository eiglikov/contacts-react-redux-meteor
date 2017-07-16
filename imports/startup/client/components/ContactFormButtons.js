import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ContactFormButtons = ({ onClear, small }) => (
  <div className='btn-toolbar pull-right'>
    <input
      type='button'
      className={classnames('btn', 'btn-default', {'btn-sm' : small})}
      onClick={onClear}
      value='CANCEL'
      readOnly
    />
    <input
      type='submit'
      className={classnames('btn', 'btn-primary', {'btn-sm' : small})}
      value="SUBMIT"
      readOnly
    />

  </div>
)

ContactFormButtons.propTypes = {
  small: PropTypes.bool,
  onClear: PropTypes.func.isRequired
}

export default ContactFormButtons
