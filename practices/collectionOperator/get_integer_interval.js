'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  //在这里写入代码
  let array = [];
  let start = number_a;
  let end = number_b;

  if (start < end) {
    while (start <= end) {
      array.push(start);
      start++;
    }
  }else if( start > end) {
    while ( start >= end) {
      array.push(start);
      start--;
    }
  }else {
    // start === end
    array.push(start);
  }

  // for (; start <= end; start++) {
  // }
  return array;

}

module.exports = get_integer_interval;

