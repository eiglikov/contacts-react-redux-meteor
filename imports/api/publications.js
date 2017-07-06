// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Contacts } from './collections.js';

// Meteor.publish('contacts.all', function () {
//   return Contacts.find();
// });

const contactPubFields = {
  _id: 1,
  name: 1,
  phone: 1
};

const getContactsPublication = function (filter, pageSkip = 0) {
  const query = {};

  switch (filter) {
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    default:
      break;
  }
  // Counts.publish(this, 'ContactsCount', Contacts.find(query));
  return Contacts.find(query, {
    fields: contactPubFields,
    skip: pageSkip,
    limit: 10
  });
};



Meteor.publish('getContacts', getContactsPublication);
