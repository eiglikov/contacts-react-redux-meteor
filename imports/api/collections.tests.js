// Tests for the behavior of the ContactsZ collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor'
import { assert } from 'meteor/practicalmeteor:chai'
import { Contacts } from './collections'

if (Meteor.isServer) {
  describe('contacts collection', function () {
    it('insert correctly', function () {
      const contactId = Contacts.insert({
        name: 'John Doe',
        userId: "uHoDFnJwYooYtihzE",
        phone: +6478229999,
        email: 'kate.cooke@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
        createdAt: new Date(),
      })
      const added = Contacts.find({ _id: contactId })
      const collectionName = added._getCollectionName()
      const count = added.count()

      assert.equal(collectionName, 'contacts')
      assert.equal(count, 1)
    })
  })
}
