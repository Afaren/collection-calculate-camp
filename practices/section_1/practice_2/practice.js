'use strict'
function collect_same_elements(collection_a, collection_b) {
  let flatenB = [].concat.apply([], collection_b);
  return collection_a.filter(a => flatenB.find(b => b === a) === undefined ? false : true);
}

module.exports = collect_same_elements;
