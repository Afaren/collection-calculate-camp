'use strict';

function average_uneven(collection) {

  let oddCollection =collection.filter(f => f % 2 !== 0);
  return oddCollection.reduce((acc, cur) => acc + cur) / oddCollection.length;
}

module.exports = average_uneven;
