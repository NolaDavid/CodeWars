/**
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


 */

function duplicateCount(text){
    //...
    let count = 0;
    text = text.toLowerCase()
    if(!text.length){
      return count;
    }
   
    let counted =  text.split('').reduce((acc,val) => {
    
      if(acc[val]){
        acc[val]++
      }else {
        acc[val] = 1;
      }
      return acc;
    },{})
    for(let [key,value] of Object.entries(counted)){
     if(value > 1){
       count++
     }
    }
    
    return count;
  }