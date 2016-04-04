exports.getTotal = function(string) {

  var string = "There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green."

  var total = string.match(/\d+ traffic lights/).join();

  return total;
}

exports.getMap = function(string) {

  var list = string.match(/(\d+) were (\w+)/g);

  var map = list.map(function(str) {

    tempStr = str.split(" were ");

    return {
      color: tempStr[1],
      number: Number(tempStr[0])
    };
  })

  return map;

}

exports.getOrange = function(total, map) {

  var tl = 0;

  map.forEach(function(obj) {
    tl += obj.number;
  })

  if (total[0] > tl) {

    orangeNumber = (total[0] - tl);
  }

  return orangeNumber;

}
