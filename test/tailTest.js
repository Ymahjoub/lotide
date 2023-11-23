const assertEqual = require('../assertEqual')
const tail = require("../tail")

console.log(tail([5, 6, 7]));
const nums = [5, 6, 7];
tail(nums);
assertEqual(nums.length, 3);