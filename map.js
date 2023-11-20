const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
   results.push(callback(item)); 
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

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

const assertArraysEqual = (arr1, arr2) => {

  const message = eqArrays(arr1, arr2)

    ? "✅ Arrays are equal."
    : "❌ Arrays are not equal."

  console.log(message);
}; 

assertArraysEqual(map(["ground"], x => x + "!"), ["ground!"]);
assertArraysEqual(map([1, 3, 6], x => x + 2), [3, 5, 8]);
assertArraysEqual(map(["lol"], x => x + "heyyyyy"), ["lolheyyyyy"]);