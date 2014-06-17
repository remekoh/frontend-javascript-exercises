module.exports.getKeys = function(object) {
  var myArray = [];
  for (var prop in object) {
    myArray.push(prop);
  }
  return myArray;
};

module.exports.getValues = function(object) {
  var myArray = [];
  for (var prop in object) {
    myArray.push(object[prop]);
  }
  return myArray;
};

module.exports.objectToArray = function(object) {
  var myArray = [];
  for (var prop in object) {
    var stringed = prop + " is " + object[prop];
    myArray.push(stringed);
  }
  return myArray;
};