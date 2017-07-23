import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'
import { getVisibleContacts, getIsFetching, getErrorMessage } from '../../reducers'
import keysrt from '../../helpers/keysrt'

import Contact from './Contact'
import ContactFetchError from './ContactFetchError'

class VisibileContactsList extends Component {
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }
  fetchData() {
    const { props: { filter, fetchContacts } } = this
    fetchContacts(filter)
  }

  render() {
    const { props: { isFetching, contacts, filter, removeContact, editContact, errorMessage } } = this

    if (!contacts.length) {
      return <h3>No contacts in <span className='first-uppercase brand-text-color'>{filter}</span></h3>
    }

    if (errorMessage && !contacts.length) {
      return (
        <ContactFetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />)
      }

      return (
        <ContactsList
          contacts={contacts}
          onRemove={removeContact}
          onEdit={editContact} />
        )
      }
    }

    VisibileContactsList.propTypes = {
      filter: PropTypes.string.isRequired,
      errorMessage: PropTypes.string,
      fetchContacts: PropTypes.func.isRequired,
      removeContact: PropTypes.func.isRequired,
      editContact: PropTypes.func.isRequired,
      isFetching: PropTypes.bool.isRequired,
      contacts: PropTypes.array.isRequired,
    }

    const ContactsList = (props) => {
      const { contacts, onRemove, onEdit } = props
      // sort contacts by name
      contacts.sort(keysrt('name'))

      return (
        <div>
          {contacts.map(contact =>
            <Contact
              key={contact.id}
              contact={contact}
              onRemove={onRemove}
              onEdit={onEdit} />
          )}
        </div>
      )
    }

    ContactsList.propTypes = {
      contacts: PropTypes.array.isRequired,
      onRemove: PropTypes.func.isRequired,
      onEdit: PropTypes.func.isRequired,
    }

    const mapStateToProps = (state, { match }) => {
      const filter = match.params.filter || 'all'
      return {
        contacts: getVisibleContacts(state, filter),
        filter,
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
      }
    }

    export default withRouter(connect(
      mapStateToProps,
      actions
    )(VisibileContactsList))
