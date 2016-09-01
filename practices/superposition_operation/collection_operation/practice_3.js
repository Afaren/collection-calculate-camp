'use strict';

function hybrid_operation_to_uneven(collection) {

  return collection.filter(f => f % 2 !== 0).map(i => i * 3 + 5).reduce((acc, cur) => acc + cur);
}

module.exports = hybrid_operation_to_uneven;

