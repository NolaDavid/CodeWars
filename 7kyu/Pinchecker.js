/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

*/


function validatePIN (pin) {
    //return true or false
  let pattern = /^\d+$/
  if(pattern.test(pin) && (pin.length === 4 || pin.length === 6)){
    return true
  }
    return false;
  }