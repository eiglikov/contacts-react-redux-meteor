import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Contact from './Contact';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers/';
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
    console.log("fetch props", this.props.contacts);

    const { props: { filter, fetchContacts } } = this
    fetchContacts(filter)
  }
  render() {
    const { props: { isFetching, contacts, removeContact, editContact, errorMessage } } = this
    // console.log("contacts in VisibileContactsList", contacts);

    if (isFetching && !contacts.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !contacts.length) {
      return (<FetchError
        message={errorMessage}
        onRetry={() => this.fetchData()}
      />)
    }
    return <ContactsList contacts={contacts} onRemove={removeContact} onEdit={editContact} />
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
  // console.log('contacts before sort', contacts);
  // console.log("sorted", contacts.sort());


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

const mapStateToProps = (state, { params }) => {
  // const filter = params.filter || 'all'
  const filter = 'all'
  return {
    contacts: getVisibleTodos(
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
