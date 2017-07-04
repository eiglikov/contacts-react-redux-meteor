// Methods related to contacts

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './contacts.js';

Meteor.methods({
  'contacts.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Contacts.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
