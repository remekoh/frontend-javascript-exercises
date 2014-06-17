module.exports.sumNumbers = function(array) {
  var num = 0;
  for (var count = 0; count < array.length; count++) {
  num = num + array[count];
  }
  return num;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var string = inputString.toLowerCase().split(",");
  return string;
};

module.exports.addIndex = function(inputData) {
  var array = [];
  for (var i = 0; i < inputData.length; i++) {
  array.push(i + " is " + inputData[i]);
  }
  return array;
};
