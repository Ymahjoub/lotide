const middle = require('../middle')
const  assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual(middle([1]), []); // Should return: []
assertArraysEqual(middle([1, 2]), []); // Should return: []
assertArraysEqual(middle([1, 2, 3]), [2]); // Should return: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should return: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should return: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should return: [3,