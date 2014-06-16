module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
  var exObj = object;
  exObj[newProp] = newValue;
  return object;
};

module.exports.formLetter = function(r) {
  var letter = r;
  return 'Hello ' + letter.recipient + ',\n\n' + letter.msg + '\n\nSincerely,\n' + letter.sender;
};

module.exports.canIGet = function(item, money) {
  var products = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };
  return products[item] <= money;
};