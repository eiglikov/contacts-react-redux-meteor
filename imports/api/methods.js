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
  'contacts.fetch': function(contactId){
    check(contactId, String);
    // Simulates a slow response by sleeping for 1 second.
    Meteor._sleepForMs(1000);
    // Fetch a single contact when contactId is given, else fetch all contacts.
    var options = contactId || {};
    return Contacts.find(options).fetch();
  },

  'contacts.insert'(name, phone, imageUrl) {
    check(name, String);
    check(phone, String);
    check(imageUrl, String);

    console.log("INSERT->", name, phone, imageUrl);

    return Contacts.insert({
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
