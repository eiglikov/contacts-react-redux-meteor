// All contacts-related publications

import { Meteor } from 'meteor/meteor';
import { Contacts } from './collections.js';

if(Meteor.isServer){
  Meteor.publish('contacts', function() {
    if (!this.userId) {
      this.ready();
      return this.stop();
    }
    console.log("this.userId", this.userId);
    return Contacts.find({userId: this.userId}, {sort: { name: 1 }});
  });
}
