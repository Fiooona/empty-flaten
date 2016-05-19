'use strict';

function double_to_one(collection) {
  var s=double_to_one1(collection)
  var r=new Array();
  label:for(var i = 0, n = s.length; i < n; i++) {
    for(var x = 0, y = r.length; x < y; x++) {
      if(r[x] == s[i]) {
        continue label;
      }
    }
    r[r.length] = s[i];
  }
  return r;
}

module.exports = double_to_one;
