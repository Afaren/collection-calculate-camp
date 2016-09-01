'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(Math.ceil(collection.reduce((acc, cur) => acc + cur) / collection.length + 96));
}

module.exports = average_to_letter;

