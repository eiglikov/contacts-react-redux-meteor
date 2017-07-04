// Methods related to contacts

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './contacts.js';

Meteor.methods({
  'contacts.insert'(name, phone) {
    check(name, String);
    check(phone, String);
    console.log("Insert server!", name, phone);

    return Contacts.insert({
      name,
      phone,
      createdAt: new Date(),
    });
  },
  'contacts.remove'(id) {
    check(id, String);
    console.log("Remove server!", id);

    return Contacts.remove({"_id": id});
  },


});
