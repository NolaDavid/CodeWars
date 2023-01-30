function solution(number){
    if(number <= 0){
        return 0
    }

    let cleanResult = [];
    for(let i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            cleanResult.push(i)
        }
    }

let sum = cleanResult.reduce((acc,val) => {
    return acc + val;
},0)
return sum;
}