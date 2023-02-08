/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"



*/

function rot13(str) {
  let abcs = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let convertedStr = "";
  let letterToAdd;

  for (let i = 0; i < str.length; i++) {
    if (abcs.indexOf(str[i].toLowerCase()) === -1) {
      convertedStr += str[i];
    } else {
      let letter = str[i].toLowerCase();
      let index = abcs.indexOf(letter) + 13;

      if (index < 26) {
        letterToAdd = abcs[index];

        if (str[i] !== letter) {
          letterToAdd = letterToAdd.toUpperCase();
        }

        convertedStr += letterToAdd;
      } else {
        index = index - 26;
        letterToAdd = abcs[index];
        if (str[i] !== letter) {
          letterToAdd = letterToAdd.toUpperCase();
        }
        convertedStr += letterToAdd;
      }
    }
  }
  return convertedStr;
}
