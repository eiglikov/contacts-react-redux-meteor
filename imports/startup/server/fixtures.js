// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/collections';

Meteor.startup(() => {
  // if the Contacts collection is empty
  if (Contacts.find().count() === 0) {
    const data = [
      {
        name: 'Sam Cooke',
        phone: 6478889999,
        createdAt: new Date(),
      },
      {
        name: 'John Sam',
        phone: 6478889229,
        createdAt: new Date(),
      },
      {
        name: 'Kate Cooke',
        phone: 1178229999,
        createdAt: new Date(),
      },
      {
        name: 'Ivan Baran',
        phone: 6478251999,
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Contacts.insert(link));
  }
});
