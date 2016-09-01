'use strict';

function choose_common_elements(collection_a, collection_b) {

  return collection_a.filter(a => {
    return collection_b.find( b => b === a) === undefined ? false : true;
  });

}

module.exports = choose_common_elements;
