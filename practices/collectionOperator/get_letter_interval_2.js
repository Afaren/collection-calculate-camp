'use strict';


function getRangeArray(lo, hi) {
  let array = [];
  let start = lo;
  let end = hi;

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
  return array;
}


function convert(value) {
  value--; // 减一是因为a从0开始
  if (value >= 0 && value < 26)
    return String.fromCharCode(value + 97);
  return convert(Math.floor(value / 26)) + String.fromCharCode(value % 26 + 97);
}


function get_letter_interval_2(number_a, number_b) {
  let rangeArray = getRangeArray(number_a, number_b);
  return rangeArray.map(i => convert(i));
}


module.exports = get_letter_interval_2;

