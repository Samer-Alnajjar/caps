'use strict'
const event = require('./events.js');
const faker = require('faker');

setInterval(() => {
  const store = {
    store: "Samer's Store",
    orderID: faker.datatype.number(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  }

  event.emit('Pickup', store);
}, 5000);
setTimeout(() => {
  event.on('In-Transit', (data) => {
    console.log('In-Transit', data);
  
  });
}, 2000);
event.on('Delivered', () => {
  console.log('Thank you, please visit us again :)');

});
