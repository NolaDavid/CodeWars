//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let basket = [];
    let zeroBasket = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        basket.push(arr[i]);
      } else {
        zeroBasket.push(arr[i]);
      }
    }
    let concatArray = basket.concat(zeroBasket);
    return concatArray;
  }