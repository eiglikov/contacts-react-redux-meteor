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
      console.log("INSERT->", contactId, name, phone, email, imageUrl, group)

      check(contactId, String)
      check(name, String)
      check(phone, String)
      check(email, String)
      check(imageUrl, String)
      check(group, String)

      // "_id" : "NenTGD3Rhyh3ThuKw",
      //  "name" : "Anet",
      //  "userId" : "XXAPQyHo2wZTRomoj",
      //  "phone" : 6473215152,
      //  "email" : "anton@gmail.com",
      //  "imageUrl" : "https://randomuser.me/api/portraits/men/12.jpg",
      //  "group" : "friends",
      //  "createdAt" : ISODate("2017-07-15T23:16:49.253Z")
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
    'contacts.update'(id, name, phone, email, imageUrl) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }
      console.log("EDIT->", id, name, phone, email, imageUrl)

      check(id, String)
      check(name, String)
      check(phone, String)
      check(email, String)
      check(imageUrl, String)


      const contact = Contacts.findOne(id)
      return Contacts.update(id,
        { $set: {
          name: name,
          phone: phone,
          email: email,
          imageUrl: imageUrl
        }
      })

    },

  })
}
