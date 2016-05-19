'use strict';

function double_to_one(collection) {
  var s=collection.join(",").split(",");
  for(var j=0;j< s.length;j++){
    s[j]=parseInt(s[j]);
  }

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
