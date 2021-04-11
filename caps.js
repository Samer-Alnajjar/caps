'use strict'

require('./vendor.js');
require('./driver.js');
const events = require('./events.js');

events.on('Pickup', (payload) => {
  console.log('A new order has been placed', payload);
});