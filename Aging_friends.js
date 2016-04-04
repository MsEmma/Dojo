exports.getMap = function(string) {

  var ls = string.replace(/ is/g, "").split(", ");

  var map = ls.map(function(str) {

    return {
      name: str.match(/\w+/).join(),
      age: Number(str.match(/\d+/))
    };

  });

  return map;
}

exports.getOldest = function(map) {

  map.sort(function(a, b) {
    return b.age - a.age;
  });

  var oldest = map[0];

  return oldest;

}

exports.getYoungerThanEllie = function(map) {

var younger = map.filter(function(a) {
  return a.age < 20;
});

return younger;

}
