'use strict';

function even_to_letter(collection) {

  return collection.filter(f => f % 2 === 0).map(m => String.fromCharCode(m + 96))

}

module.exports = even_to_letter;
