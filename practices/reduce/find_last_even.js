'use strict';

function find_last_even(collection) {
  return collection.reverse().find(i => i % 2 === 0);
  //在这里写入代码
}

module.exports = find_last_even;
