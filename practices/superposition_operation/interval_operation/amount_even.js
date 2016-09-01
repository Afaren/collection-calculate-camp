'use strict';

function amount_even(collection) {

  return collection.filter(f=>f % 2 === 0).reduce((acc, cur) => acc + cur);
}

module.exports = amount_even;
