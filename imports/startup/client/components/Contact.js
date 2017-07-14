import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    // let conformation = confirm('Are you sure you want to delete ' + this.state.contact.name + '?');
    // remove when deploy
    conformation = true;

    if(conformation){
      this.props.onRemove(this.state.contact.id);
    } else {
      console.log("canceled");

    }
  }
  handleEdit = (id, name, phone, email, imageUrl) => {
    this.handleToggleContact();
    if (this.state.name !== name ||
      this.state.phone !== phone ||
      this.state.email !== email ||
      this.state.imageUrl !== imageUrl){
        this.setState({
          name: name,
          phone: phone,
          email: email,
          imageUrl: imageUrl,
        })
        this.props.onEdit(id, name, phone, email, imageUrl);
      } else {
        console.log("No changes", name, phone, email, imageUrl);
      }
    }
    handleToggleContact = () => {
      this.setState({
        isEdited: !this.state.isEdited
      })
    }
    render() {
      // <div class="col-md-3">
      //   <div class="img">
      //     <img src="">
      //     </div>
      //   </div>
      //
      //   <div class="col-md-9">
      //     <div class="row">
      //       <div class="col-md-8">
      //         This is the product name
      //       </div>
      //       <div class="col-md-4">
      //         1 230.99
      //       </div>
      //     </div>
      //
      //     <div class="row">
      //       <div class="col-md-6">
      //         Property 1
      //       </div>
      //       <div class="col-md-6">
      //         Property 2
      //       </div>
      //     </div>
      //   </div>

        return (
        <div className='row top-buffer'>
          <div className='col-xs-3'>
            <img
              className='img-circle img-responsive'
              src={this.state.contact.imageUrl}
              alt="Profile picture"
            />
          </div>

          <div className='col-xs-6'>
            <EditContact
              className='form-inline'
              contact={this.state.contact}
              isEdited={this.state.isEdited}
              handleEdit={this.handleEdit} />
          </div>

          <div className='btn-group col-xs-3'>

            <button
              className={classnames('btn', 'btn-sm', 'btn-default','edit-comment')}
              onClick={this.handleToggleContact}>
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button
              className={classnames('btn', 'btn-sm', 'btn-default','remove-comment')}
              onClick={this.handleRemove}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>

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
