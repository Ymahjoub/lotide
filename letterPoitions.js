const assertArraysEqual = function (actual, expected) {
  const isEqual = eQArrays(actual, expected);
  console.log(
    isEqual
      ? 'Assertion Passed: ${actual} === ${expected}'
      : 'Assertion Failed: ${actual} !== ${e[exted]}'
  );
};

const eQArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i]) return false;
  return true;
};

const testLetterPositions = function () {
  const result = letterPositions("hello");
  assertArraysEqual(result.h, [0]);
};

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }
  return results;
}
assertArraysEqual(letterPositions("hello").e, [1]); 
assertArraysEqual(letterPositions("hello").l, [2,3]);