// Tests for contacts methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Contacts } from './contacts.js';
import './methods.js';

if (Meteor.isServer) {
  describe('contacts methods', function () {
    beforeEach(function () {
      Contacts.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['contacts.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Contacts.find().count(), 1);
    });
  });
}
