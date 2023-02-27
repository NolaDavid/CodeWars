/**
 * Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


 */

var countSheep = function (num){
    //your code here
    if(!num){
      return ''
    }
    let start = 1;
    let stng = ''
    while(start <= num){
      stng += `${start} sheep...`
      start++
    }
    return stng
  }