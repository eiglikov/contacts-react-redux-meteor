// Tests for contacts methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor'
import { assert } from 'meteor/practicalmeteor:chai'
import { Contacts } from './collections'
import * from './methods'

if (Meteor.isServer) {
  describe('contacts methods', function () {
    beforeEach(function () {
      Contacts.remove({})
    })

    it('can add a new contact', function () {
      const addLink = Meteor.server.method_handlers['contacts.insert']

      addLink.apply({}, ['John Doe', '+6478229999', 'kate.cooke@gmail.com', 'https://randomuser.me/api/portraits/men/37.jpg',])

      assert.equal(Contacts.find().count(), 1)
    })
  })
}
