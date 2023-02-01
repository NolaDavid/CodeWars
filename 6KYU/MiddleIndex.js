
//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1
//loop over the array and calculate the total on the right of i and the left of i and if they are the same return i
function middleIndex (arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
        let rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if (leftSum === rightSum) return i;
      }
      return -1;
}
