'use strict';

function compute_chain_median(collection) {

  let array = collection.split('->');
  return array.filter((v, k) => k === array.length / 2);

}

module.exports = compute_chain_median;
