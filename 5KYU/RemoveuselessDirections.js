//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//This function uses a dictionary opposites to map opposite directions to each other. The main loop iterates over the input array arr, and for each direction it pushes it onto a reduced array reduced only if the previous direction in reduced is not its opposite.



function dirReduc(arr) {
    const opposites = {
      'NORTH': 'SOUTH',
      'SOUTH': 'NORTH',
      'EAST': 'WEST',
      'WEST': 'EAST'
    };
    let reduced = [];
    for (let i = 0; i < arr.length; i++) {
      let direction = arr[i];
      if (reduced.length > 0 && reduced[reduced.length - 1] === opposites[direction]) {
        reduced.pop();
      } else {
        reduced.push(direction);
      }
    }
    return reduced;
  }
  