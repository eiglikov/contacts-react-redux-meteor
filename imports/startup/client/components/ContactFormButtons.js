import React from 'react'
import PropTypes from 'prop-types'

const ContactFormButtons = ({ onClear, hideSubmit }) => (
  <div className='btn-toolbar pull-right'>
    <input
      type='button'
      className='btn btn-default'
      onClick={onClear}
      value='CANCEL'
      readOnly
    />
    { hideSubmit ? ''
      :
      <input
        type='submit'
        className='btn btn-primary'
        value="SUBMIT"
        readOnly
      />
    }
  </div>
)

ContactFormButtons.propTypes = {
  onClear: PropTypes.func.isRequired,
  hideSubmit: PropTypes.bool,
}

export default ContactFormButtons
