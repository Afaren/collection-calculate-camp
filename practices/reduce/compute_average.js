'use strict';

function compute_average(collection) {

  return collection.reduce((acc, cur) => acc + cur) / collection.length;

}

module.exports = compute_average;

