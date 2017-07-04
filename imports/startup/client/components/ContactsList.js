import React from 'react';
import { connect }  from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Contacts } from '../../../api/contacts/contacts';
import Contact from './Contact';

class ContactsList extends React.Component {
  render() {
    const {dispatch} = this.props;
    const contacts = this.props.contactsList;
    // const pagination = this.props.todoCount > 10 ? (
    //   <TodoPagination
    //     handlePageClick={(data)=> {return dispatch(changePage(data.selected));}}
    //     pageCount={this.props.todoCount / 10}
    //   />) : '';
    return (
      <div>
        <ul>
          {contacts.map(contact =>
            <Contact
              key={contact._id}
              {...contact}
            />
          )}
        </ul>
      </div>
    );
  }
}

const ContactsContainer = createContainer(({visibilityFilter}) => {
  const contactsSub = Meteor.subscribe('getContacts', visibilityFilter);
  return {
    contactsSubReady: contactsSub.ready(),
    contactsList: Contacts.find({}, {}).fetch() || [],
  };
}, ContactsList);

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(mapStateToProps)(ContactsContainer);
