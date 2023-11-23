const assertArraysEqual = (arr1, arr2) => {

  const message = eqArrays(arr1, arr2)

    ? "✅ Arrays are equal."
    : "❌ Arrays are not equal."

  console.log(message);
};

const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false;
  }


  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;

};

const without = (source, itemsToRemove) => {
  const result = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;

};

const words = ["hello", "world", "lighthouse"];

const result1 = without([1, 2, 3], [1]);
assertArraysEqual(result1, [2, 3]);

const result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]);

without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without