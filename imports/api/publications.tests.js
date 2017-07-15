// Tests for the Contacts publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai'
import { Contacts } from './collections.js'
import { PublicationCollector } from 'meteor/johanbrook:publication-collector'
import './publications.js'

describe('links publications', function () {
  beforeEach(function () {
    Contacts.remove({})
    Contacts.insert({
      name: 'John Doe',
      userId: "uHoDFnJwYooYtihzE",
      phone: +6478229999,
      email: 'kate.cooke@gmail.com',
      imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
      createdAt: new Date(),
    })
  })

  describe('contacts.all', function () {
    it('sends all contacts', function (done) {
      const collector = new PublicationCollector()
      collector.collect('contacts.all', (collections) => {
        assert.equal(collections.conacts.length, 1)
        done()
      })
    })
  })
})
