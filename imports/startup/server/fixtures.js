// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/collections';

Meteor.startup(() => {
  // if the Contacts collection is empty
  if (Contacts.find().count() === 0) {
    const data = [
      {
        name: 'Sam Cooke',
        userId: "GsWx7Xqq6CrbYGknG",
        phone: 6478889999,
        imageUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
        createdAt: new Date(),
      },
      {
        name: 'John Sam',
        userId: "GsWx7Xqq6CrbYGknG",
        phone: 6478889229,
        imageUrl: 'https://randomuser.me/api/portraits/men/84.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Kate Cooke',
        userId: "GsWx7Xqq6CrbYGknG",
        phone: 1178229999,
        imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Ivan Baran',
        userId: "GsWx7Xqq6CrbYGks",
        phone: 6478251999,
        imageUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Contacts.insert(link));
  }
});
