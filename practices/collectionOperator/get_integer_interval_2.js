'use strict';

function get_integer_interval_2(number_a, number_b) {

  //在这里写入代码
  //在这里写入代码
  let array = [];
  let start = number_a;
  let end = number_b;

  if (start < end) {
    while (start <= end) {
      if (start % 2 === 0)
        array.push(start);
      start++;
    }
  } else if (start > end) {
    while (start >= end) {
      if (start % 2 === 0)
        array.push(start);
      start--;
    }
  } else {
    if( start %2 === 0 && end %2 === 0)
    array.push(start);
  }

  return array;

}

module.exports = get_integer_interval_2;
