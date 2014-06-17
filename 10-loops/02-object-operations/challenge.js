module.exports.copy = function(object) {
  var myObject = {};
  for (var prop in object) {
    myObject[prop] = object[prop];
  };
  return myObject;
};

module.exports.extend = function(dest, src) {
  var dest = dest;
  for (var prop in src) {
    dest[prop] = src[prop];
  };
  return dest;
};

module.exports.hasElems = function(obj, array) {
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] == undefined) {
      return false;
    };
  };
  return true;
};