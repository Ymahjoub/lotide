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

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays are not equal!")
  }
}; 

const takeUntil = function(array , callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

//Test Ex 
const data1 = [1, 2, 5, 7, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);
assertArraysEqual(result1, [1, ,2, 5, 7, 2]);

console.log('---'); 

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ',');
assertArraysEqual(result2, ["I've", "been", "to", "Hollywood"])