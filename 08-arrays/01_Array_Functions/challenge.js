module.exports.reversePlusOne = function(r) {
  var array = r;
  array.reverse();
  array.unshift(1);
  return array;
};

module.exports.plusesEverywhere = function(r) {
  var array = r;
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(r) {
  var array = r;
  return array.length + 1;
};