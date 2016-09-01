'use strict';
function count_same_elements(collection) {
  return collection.reduce((acc, element) => {
      let found = acc.find(i => i.key === element);
      if (found) {
        found.count++;
      } else {
        acc.push({key: element, count: 1});
      }
      return acc;
    }
    , [])
}

module.exports = count_same_elements;
