'use strict';
function count_same_elements(collection) {

  return collection.map(element => {
    let part = element.split('-');
    return {
      key: part[0],
      count: parseInt(part[1]) || 1
    }
  }).reduce((acc, cur) => {
    let found = acc.find(i => i.key === cur.key);
    if (found) {
      found.count += cur.count;
    } else {
      // 当前对象不存在
      acc.push(cur);
    }
    return acc;
  }, []);
}

module.exports = count_same_elements;
