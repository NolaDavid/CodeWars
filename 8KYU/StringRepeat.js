/**
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 */function repeatStr (n, s) {
  let start = 0;
  let end = ''
  while (start < n){
    end += s
    start++
  }
  return end;
}