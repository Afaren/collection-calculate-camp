'use strict';
function create_updated_collection(collection_a, object_b) {

  return collection_a.filter( i=> {
    return object_b.value.indexOf(i.key) > -1;
  } ).map(i=> Object.assign(i, i.count--));
}

module.exports = create_updated_collection;
