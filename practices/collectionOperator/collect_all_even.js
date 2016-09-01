'use strict';

function collect_all_even(collection) {
  return collection.filter( c => {
    return c % 2 === 0;
  });
}

module.exports = collect_all_even;
