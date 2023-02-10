/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//for this solution we first get all the given letters to be lowercase, we then create a variable to hold the alphabet. we then create a new unique array by converting the string into an array then filtering the new array with the condition of the letter being in the alphabet then we create a new set.
//we then go through the alphabet and compare the letters at each spot to the unique array built

function isPangram(string) {
  //...
  string = string.toLowerCase();

  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let array = string
    .split("")
    .filter((letter) => abc.indexOf(letter) >= 0)
    .sort();

  let unique = [...new Set(array)];

  if (unique.length < 26) {
    return false;
  }

  for (let i = 0; i < abc.length; i++) {
    if (abc[i] !== unique[i]) {
      return false;
    }
  }
  return true;
}
