module.exports.addItem = function(item, list) {
  var groceries = list;
  if (groceries.indexOf(item)) {
  groceries.push(item);
  }
  return groceries;
};
  

module.exports.reverseSortedList = function(r) {
  var array = r;
  return array.sort().reverse();
  };