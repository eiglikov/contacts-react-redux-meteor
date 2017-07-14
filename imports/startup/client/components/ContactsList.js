import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import { getVisibleContacts, getIsFetching, getErrorMessage } from '../reducers/';

import Contact from './Contact';
import FetchError from './FetchError';

class VisibileContactsList extends Component {
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      console.log("message", this.props);

      this.fetchData()
    }
  }
  fetchData() {
    console.log("fetch props", this.props);

    const { props: { filter, fetchContacts } } = this;
    fetchContacts('friends');
  }
  render() {
    const { props: { isFetching, contacts, removeContact, editContact, errorMessage } } = this;

    if (isFetching && !contacts.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !contacts.length) {
      return (
        <FetchError
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
    const { contacts, onRemove, onEdit } = props;
    return (
      <div>
        {contacts.map(contact =>
          <Contact key={contact.id} contact={contact} onRemove={onRemove} onEdit={onEdit} />
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
    console.log('filter', match.params);
    console.log('state', state);

    // const filter = match.params.filter || 'all'
    const filter = 'all'
    return {
      contacts: getVisibleContacts(
        state,
        filter
      ),
      filter,
      isFetching: getIsFetching(state, filter),
      errorMessage: getErrorMessage(state, filter),
    }
  }

  export default withRouter(connect(
    mapStateToProps,
    actions
  )(VisibileContactsList))
