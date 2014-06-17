module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function(array) {
  var numSum = 0;
  var count = 0;
  while (count < array.length) {
    numSum = array[count] + numSum; 
    count++;
  }
  return numSum;
};

