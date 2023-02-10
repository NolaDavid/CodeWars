//The function uses a for loop over the entries of an object to add characters to the result string, incrementing the number by the corresponding value each time.



function decimalToRoman(decimal) {
  if (isNaN(decimal) || decimal < 1 || decimal > 3999) return NaN;
  
  const romanNumeralMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
  let romanNumeral = "";
  for (const [key, value] of Object.entries(romanNumeralMap)) {
    while (decimal >= value) {
      romanNumeral += key;
      decimal -= value;
    }
  }
  return romanNumeral;
}
