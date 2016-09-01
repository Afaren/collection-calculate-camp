'use strict';

function double_to_one(collection) {
  return [].concat.apply([], collection);
}

module.exports = double_to_one;
