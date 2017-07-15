// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/collections';

Meteor.startup(() => {
  // if the Contacts collection is empty
  if (Contacts.find().count() === 0) {
    const data = [
      {
        name: 'Sam Cooke',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478889999,
        email: 'sam.cooke@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
        group: 'colleagues',
        createdAt: new Date(),
      },
      {
        name: 'John Sam',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478889229,
        email: 'john.sam@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/84.jpg',
        group: 'colleagues',
        createdAt: new Date(),
      },
      {
        name: 'Kate Cooke',
        userId: "uHoDFnJwYooYtihzE",
        phone: 1178229999,
        email: 'kate.cooke@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Ivan Baran',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478251999,
        email: 'ivan@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
        group: 'friends',
        createdAt: new Date(),
      },
      {
        name: 'Antonio',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6473215152,
        email: 'anton@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
        group: 'friends',
        createdAt: new Date(),
      },
      {
        name: 'Kolya Baran',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478251999,
        email: 'kolya@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/women/92.jpg',
        group: 'family',
        createdAt: new Date(),
      },
      {
        name: 'Joe Cocker',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478231999,
        email: 'joe@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
        group: 'family',
        createdAt: new Date(),
      },
      {
        name: 'Nikita Steam',
        userId: "uHoDFnJwYooYtihzE",
        phone: 64782521249,
        email: 'joe@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
        group: 'family',
        createdAt: new Date(),
      },
      {
        name: 'Sonya Essa',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478251999,
        email: 'sonya@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
        group: 'family',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Contacts.insert(link));
  }
});
