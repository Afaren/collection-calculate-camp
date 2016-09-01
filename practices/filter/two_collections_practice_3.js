'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter( a => {
    return collection_b.find( b => a % b === 0) === undefined ? false : true;
  })

}

module.exports = choose_divisible_integer;
