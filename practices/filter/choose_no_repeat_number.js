'use strict';

function choose_no_repeat_number(collection) {



  let noRepeat = [];

  // return collection.reduce( (acc, cur) => {
  //
  // });

  for( let c of collection) {
    if( noRepeat.indexOf(c) <= -1 )
      noRepeat.push(c);
  }
  return noRepeat;


  // return collection.reduce( (acc, cur ) => {
  //   let found = acc.find(entry => entry === cur);
  //   if ( !found ) {
  //     return acc.push(found);
  //   }
  //   return acc;
  // }, [])
}

module.exports = choose_no_repeat_number;
