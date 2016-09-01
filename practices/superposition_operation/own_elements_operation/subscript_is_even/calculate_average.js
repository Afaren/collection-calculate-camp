'use strict';
var calculate_average = function(collection){


  let cf = collection.filter((v, k) => k % 2 === 0 && k !== 0);
  return cf.reduce((acc, cur) => acc + cur) / cf.length;

};
module.exports = calculate_average;
