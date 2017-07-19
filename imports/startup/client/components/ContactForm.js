import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'

import GroupSelector from './GroupSelector'
import GroupButton from './GroupButton'
import ContactFormButtons from './ContactFormButtons'


const ContactForm = ({ onSubmit, onClear = null, showIcons, small, contact = {}, visibile }) => {
  let name
  let phone
  let imageUrl = contact.imageUrl ||
  'https://trendytheme.net/wp-content/themes/trendytheme/img/client.png'
  let email
  let group = contact.group || ''
  console.log("visible in Form", visibile);

  const handleSubmitForm = (e) => {
    e.preventDefault()
    onSubmit(name.value, phone.value, email.value, imageUrl.value, group)
    onClear()

  }
  const handleSelect = (selected) => {
    group = selected
  }
 console.log(contact.length)
  return (
    <div className={classnames('modal', 'modal-backdrop', {'show' : visibile})}>
      <div className="modal-dialog">
        <div className='modal-content'>
          <div className="modal-header">
            <div className='col-xs-3'>
              <img
                className='img-circle img-responsive'
                src={imageUrl}
                alt="Profile picture"
              />
            </div>
            <div className='col-xs-9'>
              <h1>{contact.name}</h1>
              { Object.getOwnPropertyNames(contact).length ?
                <GroupButton group={group} /> : ''}
            </div>
          </div>
          <div className="modal-body">
            <form className="form col-md-12 center-block" onSubmit={handleSubmitForm}>
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
                  <i className="glyphicon glyphicon-earphone"></i>
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
              <div className="form-group top-buffer">
                <ContactFormButtons
                  onClear={onClear}
                  small={small}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer" style={{borderTop: 0}}></div>
        </div>
      </div>
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
