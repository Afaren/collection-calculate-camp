'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码

  let common = collection_a.filter(a => collection_b.find(b => b === a) === undefined ? false : true);
  return collection_a.filter(a => common.find(c => c === a) === undefined ? true : false);

}

module.exports = choose_no_common_elements;
