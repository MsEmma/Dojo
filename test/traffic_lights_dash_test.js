var assert = require('assert');
var traffic_lights_dash = require('../traffic_lights_dash');

describe("traffic_lights_dash", function() {

  it("should return a map of traffic lights and the total number", function() {
    result = traffic_lights_dash.getTotal("There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green.");
    assert.equal(result, "9 traffic lights");
  });

  it("should return a map of color lights and their numbers", function() {
    result = traffic_lights_dash.getMap("There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green.");
    assert.deepEqual(result,  [{ number : 3, color : 'red'},
                              { number : 2, color : 'green'}]);
  });

  it("should return number of orange traffic lights", function() {
    result = traffic_lights_dash.getOrange("9 traffic lights",[{ number : 3, color : 'red'},
                              { number : 2, color : 'green'}]);
    assert.deepEqual(result,  4);
  });

});
