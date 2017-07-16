// All contacts-related publications

import { Meteor } from 'meteor/meteor'
import { Contacts } from './collections.js'

if(Meteor.isServer){
  Meteor.publish('contacts', function(filter = 'all') {
    if (!this.userId) {
      this.ready()
      return this.stop()
    }
    Meteor._sleepForMs(1000)
  // simulate error when publishing
  // throw new Meteor.Error('Something went wrong!')
    const query = {}

    if (filter === 'family') {
      query.group = 'family'
    }
    else if (filter === 'friends') {
      query.group = 'friends'
    }
    else if (filter === 'colleagues') {
      query.group = 'colleagues'
    }
    query.userId = this.userId
    console.log("query", query)
    console.log("this.userId", this.userId)
    console.log("------------");

    return Contacts.find(query, {sort: { name: 1 }})
  })
}
