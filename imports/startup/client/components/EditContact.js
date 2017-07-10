import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

// const EditContact = ({ dispatch, contact, isEdited, handleEdit }) => {
class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.contact.name,
      phone: props.contact.phone,
      imageUrl: props.contact.imageUrl,
      isEdited: props.isEdited,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isEdited: nextProps.isEdited});
  }
  handleEditContact = (name, phone, imageUrl) => {
    this.setState({
      name: name,
      phone: phone,
      imageUrl: imageUrl,
    });
    this.props.handleEdit(this.props.contact.id, name, phone, imageUrl);
  }

  render(){
    let name = this.state.name;
    let phone = this.state.phone;
    let imageUrl = this.state.imageUrl;

    if (this.state.isEdited)
    return(
      <div className='form-inline'>
        <input
          className={classnames('form-control')}
          type="text"
          placeholder='name'
          defaultValue={name}
          ref={node => {
            name = node
          }}
        />
        <input
          className={classnames('form-control')}
          type="text"
          placeholder='phone'
          defaultValue={phone}
          ref={node => {
            phone = node
          }}
        />
        <input
          className={classnames('form-control')}
          type="text"
          placeholder='image url'
          defaultValue={imageUrl}
          ref={node => {
            imageUrl = node
          }}
        />
        <button
          className={classnames('btn', 'btn-primary')}
          onClick={() => this.handleEditContact(name.value, phone.value, imageUrl.value)}>
          Submit
        </button>

      </div>
    )

    return (
      <div className={classnames('')}>
        {name} {phone}
      </div>
    );

  }
}


EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

export default connect()(EditContact);
