var assert = require('assert');
var Aging_friends = require('../Aging_friends.js');

describe("Aging_friends", function() {

  it("should return a map of friends and their ages", function() {
    result = Aging_friends.getMap("Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27");
    assert.deepEqual(result, [{ age: 23 ,name: 'Xola'  },
                              { age: 18 ,name: 'Peter'},
                              { age: 29 ,name: 'Oya'  },
                              { age: 20 ,name: 'Ellie'},
                              { age: 27 ,name: 'Sive'}]);
  });

  it("should return the oldest friend and age", function() {
    result = Aging_friends.getOldest([ { name: 'Oya', age: 29 },
                                    { name: 'Sive', age: 27 },
                                    { name: 'Xola', age: 23 },
                                    { name: 'Ellie', age: 20 },
                                    { name: 'Peter', age: 18 } ]);
    assert.deepEqual(result, { name: 'Oya', age: 29 });
  });

  it("should return a map of those younger than Ellie", function() {
    result = Aging_friends.getYoungerThanEllie([{ name: 'Oya', age: 29 },
                                                { name: 'Sive', age: 27 },
                                                { name: 'Xola', age: 23 },
                                                { name: 'Ellie', age: 20 },
                                                { name: 'Peter', age: 18 } ]);
    assert.deepEqual(result, [ { name: 'Peter', age: 18 } ]);
  });

});
