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

const assertArraysEqual = function (actual, expected) {
  const message = eqArrays(actual, expected) ? '✅Assertion passed' : '❌Assertion Failed';
  console.log(message);

};

const middle = function (array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
}; 

assertArraysEqual(middle([1]), []); // Should return: []
assertArraysEqual(middle([1, 2]), []); // Should return: []
assertArraysEqual(middle([1, 2, 3]), [2]); // Should return: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should return: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should return: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should return: [3,

