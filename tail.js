const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);

};

console.log(tail([5, 6, 7]));
const nums = [5, 6, 7];
tail(nums);
assertEqual(nums.length, 3);