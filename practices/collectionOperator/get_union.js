'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码

  // A U B = A U ( B - A )

  return collection_a.concat(collection_b.filter(b => {
    return collection_a.find(a => a === b) === undefined ? true : false;
  }));


  // 找不到的话就是不在b中
  // return collection_a.concat(collection_b.filter(b => {
  //   return collection_a.find(a => a == b) === undefined ? false : true;
  // 用 a !== b的话，只要不匹配就直接返回了，所以说，find这个函数，应该用 相等=== 来做谓词判断，而不是用 不相等！==
  // return collection_a.find(a => a !== b) === undefined ? false : true;
  // }));
  // return collection_b.filter(b => {
  //   let found = collection_a.find(a => a === b);
  //   return found === undefined ? true : false;
  // }).concat(collection_a);


}

module.exports = get_union;

