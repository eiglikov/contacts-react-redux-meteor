import React, { PropTypes, Component } from 'react';
import EditContact from './EditContact';
import classnames from 'classnames';

class Contact extends Component {

  constructor(props) {
    // contact, onRemove, toggleEditContact
    super(props);
    this.state = {
      isEdited: false,
      contact: props.contact
    }
  }
  handleRemove = () => {
    this.props.onRemove(this.state.contact.id);
  }
  handleEdit = (id, name, phone, imageUrl) => {
    this.handleToggleContact();
    if (this.state.name !== name ||
      this.state.phone !== phone ||
      this.state.imageUrl !== imageUrl){
        this.setState({
          name: name,
          phone: phone,
          imageUrl: imageUrl,
        })
        this.props.onEdit(id, name, phone, imageUrl);
      } else {
        console.log("No changes", name, phone, imageUrl);
      }
  }
  handleToggleContact = () => {
    this.setState({
      isEdited: !this.state.isEdited
    })
  }
  render() {
    console.log('Rendering Contactc');

    return (
      <div className='row'>
        <img
          className={classnames('img-circle')}
          src={this.state.contact.imageUrl}
          alt="Profile picture" height="55" width="55"
        />

        <EditContact
          className='form-inline'
          contact={this.state.contact}
          isEdited={this.state.isEdited}
          handleEdit={this.handleEdit} />

        <button
          className={classnames('btn', 'btn-sm', 'btn-default','edit-comment')}
          onClick={this.handleToggleContact}>
          EDIT
        </button>
        <button
          className={classnames('btn', 'btn-sm', 'btn-default','remove-comment')}
          onClick={this.handleRemove}>
          &times;
        </button>
      </div>
      )
    }
  }

  Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  }

  export default Contact;
