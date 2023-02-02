/*Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score( dice ) {
    // Fill me in!
    const countedDiceRolls = dice.reduce((acc,val) => {
      
      if(acc[val] && acc[val] < 3){
        acc[val]++
      }else {
        acc[val] = 1
      }
      return acc
    },{})
    
    
    let finalScore = 0;
    const scoreObj = {
        31: 1000,
        36: 600,
        35: 500,
        34: 400,
        33: 300,
        32: 200,
        1: 100,
        5: 50
      }
    for(let [key,value] of Object.entries(countedDiceRolls)){
      if(value === 3){
        let scoreKey =  String(value) + String(key)
        finalScore += scoreObj[scoreKey]
      }else { 
          if(scoreObj[key]){
            console.log('number added',scoreObj[key])
             finalScore += (scoreObj[key])      
        }
      }
      
    }
  
   return finalScore;
  }

  //For this function we count the occurences of how many time a number has been rolled
  //We then go through the newly created object to score each dice rolled, if the same number was rolled 3 times we use a different key in our score object to add to the final score