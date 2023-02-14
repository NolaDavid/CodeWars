/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
*/

function century(year) {
    // Finish this :)
    let century;
    year = year.toString();
   if(year.length < 4){
     while(year.length < 4){
       year = '0' + year
     }
   }
    let firstHalf = Number(year.slice(0,2))
    let secondHalf = Number(year.slice(2))
   
    if(secondHalf < 1){
      
      century = firstHalf
    }else {
     
      century = firstHalf + 1
    }
   
    return century
  }