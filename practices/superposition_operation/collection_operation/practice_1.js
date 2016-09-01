'use strict';

function hybrid_operation(collection) {

  //在这里写入代码

  return collection.map(c => c * 3 + 2).reduce((acc, cur) => acc + cur, 0);






















}

module.exports = hybrid_operation;

