
const eqArrays = require('./eqArrays')

const assertArraysEqual = (arr1, arr2) => {

  const message = eqArrays(arr1, arr2)

    ? "✅ Arrays are equal."
    : "❌ Arrays are not equal."

  console.log(message);
};

module.exports = assertArraysEqual



