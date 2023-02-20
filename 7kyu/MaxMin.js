//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    // ...
  const numArr = numbers.split(' ')
  let max = Math.max(...numArr)
  let min = Math.min(...numArr)
  return `${max} ${min}`
  }