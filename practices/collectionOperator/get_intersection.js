'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码


  return collection_b.filter(b => collection_a.find(a => a === b) === undefined ? false : true);



  return collection_a.filter(a => {
    let found = collection_b.find(b => b === a);
    return found === undefined ? false : true;
  })
}

module.exports = get_intersection;
