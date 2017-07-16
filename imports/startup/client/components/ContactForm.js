import React from 'react'
import PropTypes from 'prop-types'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'
import GroupSelector from './GroupSelector'

const ContactForm = ({ onSubmit, showIcons, smallButtons }) => {

  let name
  let phone
  let imageUrl
  let email
  let group = 'all'

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log(name.value, phone.value, email.value, imageUrl.value, group)


    if (!name.value.length && !phone.value.length && !email.value.length){
      console.log("Fields cannot be empty")
      Bert.alert("Fields cannot be empty", 'danger')
    } else {
      onSubmit(name.value, phone.value, email.value, imageUrl.value, group)
      // handleClearForm()
    }
  }

  const handleClearForm = () => {
    name.value = ''
    phone.value = ''
    imageUrl.value = ''
    email.value = ''
    // group = 'all'
  }
  const handleSelect = (selected) => {
    // console.log('group', selected)
    group = selected
  }

  return (
    <div className='row'>
      <form className='form-group' onSubmit={handleSubmitForm}>
        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
            className='form-control'
            type="text"
            placeholder='name'
            ref={node => {
              name = node
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-phone"></i>
          </span>
          <input
            className='form-control'
            type="text"
            placeholder='phone'
            ref={node => {
              phone = node
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-envelope"></i>
          </span>
          <input
            className='form-control'
            type="text"
            placeholder='email'
            ref={node => {
              email = node
            }}
          />
        </div>

        <div className="form-group input-group input-group-unstyled">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-picture"></i>
          </span>
          <input
            className='form-control'
            type="text"
            placeholder='image url'
            ref={node => {
              imageUrl = node
            }}
          />
        </div>

        <GroupSelector
          onSelect={handleSelect}
          hideIcon={false}
          selectedOption={group}
        />


        <div className='btn-toolbar pull-right'>
          <input
            type='button'
            className='btn btn-default'
            onClick={handleClearForm}
            value='CANCEL'
          />
          <input
            type='submit'
            className="btn btn-primary"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  showIcons: PropTypes.bool,
  smallButtons: PropTypes.bool,
}

export default ContactForm
