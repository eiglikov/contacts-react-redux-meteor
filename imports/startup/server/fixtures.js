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
        imageUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
        createdAt: new Date(),
      },
      {
        name: 'John Sam',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478889229,
        imageUrl: 'https://randomuser.me/api/portraits/men/84.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Kate Cooke',
        userId: "uHoDFnJwYooYtihzE",
        phone: 1178229999,
        imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Ivan Baran',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478251999,
        imageUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Antonio',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6473215152,
        imageUrl: 'https://randomuser.me/api/portraits/men/02.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Kolya Baran',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478251999,
        imageUrl: 'https://randomuser.me/api/portraits/women/92.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Joe Cocker',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478231999,
        imageUrl: 'https://randomuser.me/api/portraits/women/07.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Nikita Baran',
        userId: "uHoDFnJwYooYtihzE",
        phone: 64782521249,
        imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
        createdAt: new Date(),
      },
      {
        name: 'Sonya Baran',
        userId: "uHoDFnJwYooYtihzE",
        phone: 6478251999,
        imageUrl: 'https://randomuser.me/api/portraits/men/05.jpg',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Contacts.insert(link));
  }
});
