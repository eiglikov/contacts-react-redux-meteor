import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

// const EditContact = ({ dispatch, contact, isEdited, handleEdit }) => {
class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.contact.name,
      phone: props.contact.phone,
      email: props.contact.email,
      imageUrl: props.contact.imageUrl,
      isEdited: props.isEdited,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isEdited: nextProps.isEdited});
  }
  handleEditContact = (name, phone, email, imageUrl) => {
    this.setState({
      name: name,
      phone: phone,
      email: email,
      imageUrl: imageUrl,
    });
    console.log("imageUrl", imageUrl);

    this.props.handleEdit(this.props.contact.id, name, phone, email, imageUrl);
  }

  render(){
    let name = this.state.name;
    let phone = this.state.phone;
    let email = this.state.email;
    let imageUrl = this.state.imageUrl;

    if (this.state.isEdited)
    return(
      <form className='form-inline'>
        <input
          className='form-control'
          type="text"
          placeholder='name'
          defaultValue={name}
          ref={node => {
            name = node
          }}
        />
        <input
          className='form-control'
          type="text"
          placeholder='phone'
          defaultValue={phone}
          ref={node => {
            phone = node
          }}
        />
        <input
          className='form-control'
          type="text"
          placeholder='example@email.com'
          defaultValue={email}
          ref={node => {
            email = node
          }}
        />
        <input
          className='form-control'
          type="text"
          placeholder='https://randomuser.me/api/portraits/women/92.jpg'
          defaultValue={imageUrl}
          ref={node => {
            imageUrl = node
          }}
        />
        <button
          className='btn btn-primary'
          onClick={() => this.handleEditContact(name.value, phone.value, email.value, imageUrl.value)}>
          Submit
        </button>

      </form>
    )

    return (
      <div className="row">
        <div className="col-xs-8">
          <h4>{name}</h4>
          <p>{phone}</p>
          <p>{email}</p>

        </div>
      </div>
    );

  }
}


EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

export default connect()(EditContact);
