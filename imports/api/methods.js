// Methods related to contacts
import { Meteor } from 'meteor/meteor'
import { Contacts } from './collections'
import { check } from 'meteor/check'
import * as checkEnhancers from './checkEnhancers'

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
      check(contactId, checkEnhancers.NonEmptyString)

      console.log("fetch", contactId)
      // Fetch a single contact when contactId is given, else fetch all contacts.
      var options = contactId || {}
      return Contacts.find(options).fetch()
    },

    'contacts.insert'(contactId, name, phone, email, imageUrl, group) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }

      console.log("group", group, group.length);

      check(contactId, checkEnhancers.NonEmptyString)
      check(name, checkEnhancers.NonEmptyString)
      check(phone, checkEnhancers.ShortNumber)
      check(email, checkEnhancers.ValidEmail)
      check(imageUrl, checkEnhancers.ValidUrl)
      check(group, checkEnhancers.ValidGroup)


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
    'contacts.remove'(contactId) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }
      check(contactId, checkEnhancers.NonEmptyString)

      console.log("REMOVE->", contactId)
      return Contacts.remove({"_id": contactId})
    },
    'contacts.update'(contactId, name, phone, email, imageUrl, group) {
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized')
      }
      console.log("EDIT->", contactId, name, phone, email, imageUrl, group)

      check(contactId, checkEnhancers.NonEmptyString)
      check(name, checkEnhancers.NonEmptyString)
      check(phone, checkEnhancers.ShortNumber)
      check(email, checkEnhancers.ValidEmail)
      check(imageUrl, checkEnhancers.ValidUrl)
      check(group, checkEnhancers.ValidGroup)


      const contact = Contacts.findOne(contactId)

      return Contacts.update(contactId,
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
