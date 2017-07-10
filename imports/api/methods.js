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


Meteor.methods({
  'contacts.fetch'(contactId, userId){
    check(contactId, String);
    check(userId, String);
    // Simulates a slow response by sleeping for 1 second.
    // Meteor._sleepForMs(1000);
    // Fetch a single contact when contactId is given, else fetch all contacts.
    var options = contactId || {userId};
    return Contacts.find(options).fetch();
  },

  'contacts.insert'(userId, name, phone, imageUrl) {
    check(name, String);
    check(phone, String);
    check(imageUrl, String);
    check(userId, String);


    console.log("INSERT->", userId, name, phone, imageUrl);

    return Contacts.insert({
      userId,
      name,
      phone,
      imageUrl,
      createdAt: new Date(),
    });
  },
  'contacts.remove'(id) {
    check(id, String);
    console.log("REMOVE->", id);
    return Contacts.remove({"_id": id});
  },
  'contacts.update'(id, name, phone, imageUrl) {
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
