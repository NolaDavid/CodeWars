/**
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)
 */var number=function(array){
  //your awesome code here
  let result = []
  if(!array.length){
    return [];
  }
for(let i = 0; i < array.length; i++){
  let idx = i + 1;
  let letter = array[i]
  result.push(`${idx}: ${letter}`)
}
  return result;
}