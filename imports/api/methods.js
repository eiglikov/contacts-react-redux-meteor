// Methods related to contacts

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './collections.js';
import random from 'meteor-random';

Contacts.deny({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});

if(Meteor.isServer){

  Meteor.methods({
    'contacts.fetch'(contactId){
      check(contactId, String);

      console.log("fetch", contactId);

      // Simulates a slow response by sleeping for 1 second.
      // Meteor._sleepForMs(1000);
      // Fetch a single contact when contactId is given, else fetch all contacts.
      var options = contactId || {};
      return Contacts.find(options).fetch();
    },

    'contacts.insert'(name, phone, imageUrl) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      check(name, String);
      check(phone, String);
      check(imageUrl, String);

      let userId = Meteor.userId();
      let user = this.userId;
      console.log("server Meteor.userId", Meteor.userId());
      console.log("server this.userId", this.userId);


      console.log("INSERT->", user, name, phone, imageUrl);

      return Contacts.insert({
        userId,
        name,
        phone,
        imageUrl,
        createdAt: new Date(),
      });
    },
    'contacts.remove'(id) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      check(id, String);
      console.log("REMOVE->", id);
      return Contacts.remove({"_id": id});
    },
    'contacts.update'(id, name, phone, imageUrl) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      check(id, String);
      check(name, String);
      check(phone, String);
      check(imageUrl, String);

      console.log("EDIT->", id, name, phone, imageUrl);

      const contact = Contacts.findOne(id)
      return Contacts.update(id,
        { $set: {
          name: name,
          phone: phone,
          imageUrl: imageUrl
        }
      });

    },

  });
}
