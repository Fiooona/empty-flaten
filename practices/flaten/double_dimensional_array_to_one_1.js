'use strict';

function double_to_one(collection) {
  var s=collection.join(",").split(",");
  for(var i=0;i< s.length;i++){
    s[i]=parseInt(s[i]);
  }
  return s
}

module.exports = double_to_one;
