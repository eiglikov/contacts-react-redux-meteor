// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Contacts } from './contacts.js';

if (Meteor.isServer) {
  describe('contacts collection', function () {
    it('insert correctly', function () {
      const linkId = Contacts.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Contacts.find({ _id: linkId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'contacts');
      assert.equal(count, 1);
    });
  });
}
