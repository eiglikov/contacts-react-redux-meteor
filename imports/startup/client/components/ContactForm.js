import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import GroupSelector from './GroupSelector'
import GroupButton from './GroupButton'
import ContactFormButtons from './ContactFormButtons'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    let contact = props.contact || {}
    this.state = {
      contact: contact,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      imageUrl: contact.imageUrl,
      group: contact.group || 'all',
      visibile: false,
      detailView: props.detailView
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({visibile: nextProps.visibile})
  }
  handleSubmitForm = (e) => {
    e.preventDefault()
    let name = this.name.value
    let phone = this.phone.value
    let email = this.email.value
    let imageUrl = this.imageUrl.value
    // Optimistic UI update
    this.setState({
      name: name,
      phone: phone,
      email: email,
      imageUrl: imageUrl,
    })
    this.props.onSubmit(name, phone, email, imageUrl, this.state.group)
    this.props.onClear()
  }
  handleSelect = (selected) => {
    this.setState({
      group: selected
    })
  }
  toggleView = () => {
    this.setState({
      detailView: !this.state.detailView
    })
  }

  render(){
    const {state: {contact, name, phone, email, group, detailView, isEdited, visibile}} = this
    let imageUrl = contact.imageUrl ||
    'https://trendytheme.net/wp-content/themes/trendytheme/img/client.png'

    return (
      <div className={classnames('modal', 'modal-backdrop', {'show' : visibile})}>
        <div className="modal-dialog">
          <div className='modal-content'>
            <div className="modal-header">
              { this.props.createView ?
                <h2> Create Contact</h2>
                :
                <div>
                  <div className='col-xs-3'>
                    <img
                      className='img-circle img-responsive'
                      src={imageUrl}
                      alt="Profile picture"
                    />
                  </div>

                  <div className='col-xs-9'>
                    <h1>{name}</h1>
                    <div className='btn-group control-btn-group'>
                      <button
                        className='btn btn-default edit-comment'
                        onClick={this.toggleView}>
                        <span className="glyphicon glyphicon-pencil"></span>
                      </button>
                      <button
                        className='btn btn-default remove-comment'
                        onClick={this.props.onRemove}>
                        <span className="glyphicon glyphicon-remove"></span>
                      </button>
                    </div>
                    { Object.getOwnPropertyNames(contact).length ?
                      <GroupButton group={group} /> : ''}
                  </div>
                </div>
              }
            </div>



            <div className="modal-body">
              <form className="form col-md-12 center-block" onSubmit={this.handleSubmitForm}>
                <div className='input-group input-group-unstyled form-group form-group'>
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user"></i>
                  </span>
                  { detailView ? <p>{name}</p>
                    :
                    <input
                      className='form-control'
                      id='contact-name'
                      type="text"
                      placeholder='name'
                      defaultValue={name}
                      ref={node => this.name = node}
                    />
                  }
                </div>

                <div className='input-group input-group-unstyled form-group'>
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-earphone"></i>
                  </span>
                  { detailView ? <p>{phone}</p>
                    :
                    <input
                      className='form-control'
                      id='contact-phone'
                      type="text"
                      placeholder='phone'
                      defaultValue={phone}
                      ref={node => this.phone = node}
                    />
                  }
                </div>

                <div className='input-group input-group-unstyled form-group'>
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-envelope"></i>
                  </span>
                  { detailView ? <p>{email}</p>
                    :
                    <input
                      className='form-control'
                      type="text"
                      id='contact-email'
                      placeholder='email'
                      defaultValue={email}
                      ref={node => this.email = node}
                    />
                  }
                </div>

                <div className='input-group input-group-unstyled form-group'>
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-picture"></i>
                  </span>
                  { detailView ? <p>{imageUrl}</p>
                    :
                    <input
                      className='form-control'
                      id='contact-imageUrl'
                      type="text"
                      placeholder='image url'
                      defaultValue={imageUrl}
                      ref={node => this.imageUrl = node}
                    />
                  }
                </div>
                { detailView ? ''
                  :
                    <GroupSelector
                      onSelect={this.handleSelect}
                      hideIcon={false}
                      selectedOption={group}
                      smallButtons={false}
                    />
                }
                <div className="form-group top-buffer">
                  <ContactFormButtons
                    onClear={this.props.onClear}
                    hideSubmit={detailView}
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
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  showIcons: PropTypes.bool,
  contact: PropTypes.object,
  detailView: PropTypes.bool.isRequired,
}

export default ContactForm
