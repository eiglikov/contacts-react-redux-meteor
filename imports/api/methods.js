// Methods related to contacts

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './collections.js';
// import random from 'meteor-random';

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
      // Fetch a single contact when contactId is given, else fetch all contacts.
      var options = contactId || {};
      return Contacts.find(options).fetch();
    },

    'contacts.insert'(name, phone, email, imageUrl, group) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      console.log("Meteor user " +  Meteor.userId());

      check(name, String);
      check(phone, String);
      check(imageUrl, String);
      check(group, String);

      let userId = Meteor.userId();
      // let user = this.userId;
      // console.log("server Meteor.userId", Meteor.userId());
      // console.log("server this.userId", this.userId);


      console.log("INSERT->", userId, name, phone, email, imageUrl, group);

      return Contacts.insert({
        userId,
        name,
        phone,
        email,
        imageUrl,
        group,
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
    'contacts.update'(id, name, phone, email, imageUrl) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      console.log("EDIT->", id, name, phone, email, imageUrl);

      check(id, String);
      check(name, String);
      check(phone, String);
      check(email, String);
      check(imageUrl, String);


      const contact = Contacts.findOne(id)
      return Contacts.update(id,
        { $set: {
          name: name,
          phone: phone,
          email: email,
          imageUrl: imageUrl
        }
      });

    },

  });
}
