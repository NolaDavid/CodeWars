/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

function XO(string) {
    //code here
  string = string.toLowerCase();
  let xCount = 0;
  let oCount = 0
  let array = string.split('')
  array.forEach(item => {
    if(item === 'x'){
      xCount++
    }
    if(item === 'o'){
      oCount++
    }
  })
 return xCount === oCount
}