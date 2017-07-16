import React from 'react'
import PropTypes from 'prop-types'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import GroupSelector from './GroupSelector'

const AddContactForm = ({ dispatch }) => {
  let name
  let phone
  let imageUrl
  let email
  let group

  const handleAddContactForm = (e) => {
    e.preventDefault()
    console.log(name.value, phone.value, email.value, chooseImage(imageUrl), group)


    if (!name.value.length && !phone.value.length && !email.value.length){
      console.log("Fields cannot be empty")
      Bert.alert("Fields cannot be empty", 'danger')
    } else {
      dispatch(addTodo(name.value, phone.value, email.value, chooseImage(imageUrl), group))
      handleClearForm()
    }
  }
  const chooseImage = (imageUrl) => {
    if (imageUrl.value === '')
      //default image placeholder
      return 'https://trendytheme.net/wp-content/themes/trendytheme/img/client.png'
     else
      return imageUrl.value
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
      <form className='form-group' onSubmit={handleAddContactForm}>
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

AddContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddContactForm)
