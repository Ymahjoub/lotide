const assert = require('chai').assert
const tail = require("../tail") 

describe("#tail", () => {
  it("tail doesn't change the array [5, 6, 7]", () => {
    const nums = [5, 6, 7];
    tail(nums);
    assert.strictEqual(nums.length, 3);
  });
});

