'use strict';

function double_to_one(collection) {

  let all = [].concat.apply([], collection);
  let noRepeat = [];
  for (let a of all) {
    if (noRepeat.indexOf(a) <= -1) {
      noRepeat.push(a)
    }
  }
  return noRepeat;
}

module.exports = double_to_one;
