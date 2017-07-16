import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'

import GroupSelector from './GroupSelector'
import ContactFormButtons from './ContactFormButtons'


const ContactForm = ({ onSubmit, onClear = null, showIcons, small, contact = {} }) => {
  let name
  let phone
  let imageUrl
  let email
  let group = contact.group || ''

  const handleSubmitForm = (e) => {
    e.preventDefault()
    onSubmit(name.value, phone.value, email.value, imageUrl.value, group)
    defaultClearForm()
  }
  const defaultClearForm = () => {
    name.value = ''
    phone.value = ''
    imageUrl.value = ''
    email.value = ''
    // group = 'all'
  }
  const handleClear = onClear || defaultClearForm

  const handleSelect = (selected) => {
    group = selected
  }

  return (
    <div className='row'>
      <form className='form-group' onSubmit={handleSubmitForm}>
        <div className={classnames('input-group', 'input-group-unstyled', {'form-group' : !small})}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
            className={classnames('form-control', {'input-sm' : small})}
            type="text"
            placeholder='name'
            defaultValue={contact.name}
            ref={node => {
              name = node
            }}
          />
        </div>

        <div className={classnames('input-group', 'input-group-unstyled', {'form-group' : !small})}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-phone"></i>
          </span>
          <input
            className={classnames('form-control', {'input-sm' : small})}
            type="text"
            placeholder='phone'
            defaultValue={contact.phone}
            ref={node => {
              phone = node
            }}
          />
        </div>

        <div className={classnames('input-group', 'input-group-unstyled', {'form-group' : !small})}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-envelope"></i>
          </span>
          <input
            className={classnames('form-control', {'input-sm' : small})}
            type="text"
            placeholder='email'
            defaultValue={contact.email}
            ref={node => {
              email = node
            }}
          />
        </div>

        <div className={classnames('input-group', 'input-group-unstyled', {'form-group' : !small})}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-picture"></i>
          </span>
          <input
            className={classnames('form-control', {'input-sm' : small})}
            type="text"
            placeholder='image url'
            defaultValue={contact.imageUrl}
            ref={node => {
              imageUrl = node
            }}
          />
        </div>

        <GroupSelector
          onSelect={handleSelect}
          hideIcon={false}
          selectedOption={group}
          smallButtons={small}
        />

        <ContactFormButtons
          onClear={handleClear}
          small={small}
        />

      </form>
    </div>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  showIcons: PropTypes.bool,
  small: PropTypes.bool,
  contact: PropTypes.object,
}

export default ContactForm
