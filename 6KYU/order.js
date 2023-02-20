/**
 * 
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 */

function order(words){
    // ...
    if (!words.length){
      return ""
    }
    let seperatedWords = words.split(' ')
    let sortedWords = new Array(seperatedWords.length)
    for(let i = 0; i < seperatedWords.length; i++){
        const word = seperatedWords[i];
      const num = parseInt(word.match(/\d+/)[0]);
      sortedWords[num - 1] = word; 
  
  
    }
    return sortedWords.join(" ")
  }