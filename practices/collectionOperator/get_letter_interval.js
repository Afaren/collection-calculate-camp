'use strict';

function get_letter_interval(number_a, number_b) {




  //在这里写入代码
  let array = [];
  let start = number_a;
  let end = number_b;

  if (start < end) {
    while (start <= end) {
      array.push(start);
      start++;
    }
  } else if (start > end) {
    while (start >= end) {
      array.push(start);
      start--;
    }
  } else {
    // start === end
    array.push(start);
  }

  array = array.map(i => String.fromCharCode(i + 96));

  return array;
}

module.exports = get_letter_interval;
