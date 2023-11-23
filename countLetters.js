const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== ' ') {

      if(letterCount[letter]) {
        
        letterCount[letter]++;

      } else {
        letterCount[letter] = 1;

    }
  }
} 

return letterCount; 

}; 

const result = countLetters('LHL');
assertEqual(result ['L'], 2);
assertEqual(result['H'], 1);

module.exports = countLetters
