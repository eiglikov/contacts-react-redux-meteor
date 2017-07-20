// Methods related to contacts

import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Contacts } from './collections.js'
// import random from 'meteor-random'

Contacts.deny({
  insert: function(){
    return false
  },
  update: function(){
    return false
  },
  remove: function(){
    return false
  }
})

if(Meteor.isServer){

  Meteor.methods({
    'contacts.fetch'(contactId){
      check(contactId, String)

      console.log("fetch", contactId)
      // Fetch a single contact when contactId is given, else fetch all contacts.
      var options = contactId || {}
      return Contacts.find(options).fetch()
    },

    'contacts.insert'(contactId, name, phone, email, imageUrl, group) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }
      check(contactId, String)
      check(name, String)
      check(phone, String)
      check(email, String)
      check(imageUrl, String)
      check(group, String)

      let userId = Meteor.userId()
      console.log("INSERT->", userId, name, phone, email, imageUrl, group)

      return Contacts.insert({
        _id: contactId,
        userId: userId,
        name: name,
        phone: phone,
        email: email,
        imageUrl: imageUrl,
        group: group,
        createdAt: new Date(),
      })
    },
    'contacts.remove'(id) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }
      check(id, String)
      console.log("REMOVE->", id)
      return Contacts.remove({"_id": id})
    },
    'contacts.update'(id, name, phone, email, imageUrl, group) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }
      console.log("EDIT->", id, name, phone, email, imageUrl, group)

      check(id, String)
      check(name, String)
      check(phone, String)
      check(email, String)
      check(imageUrl, String)
      check(group, String)


      const contact = Contacts.findOne(id)

      return Contacts.update(id,
        { $set: {
          name: name,
          phone: phone,
          email: email,
          imageUrl: imageUrl,
          group: group
        }
      })

    },

  })
}
