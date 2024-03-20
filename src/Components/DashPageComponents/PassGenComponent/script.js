var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
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

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const minLen = 8;
const maxLen = 128;

export function isChecked(elementId) {
  return document.getElementById(elementId).checked;
}

export function getPasswordOptions() {
  var length = parseInt(document.getElementById("passwordLength").value, 10);

  if (isNaN(length) || length < minLen || length > maxLen) {
    alert("Password length has to be between 8 and 128 characters!");
    return null;
  }

  var upperCase = isChecked("upperCase");
  var lowerCase = isChecked("lowerCase");
  var number = isChecked("numbers");
  var special = isChecked("specialChars");

  if (!(upperCase || lowerCase || number || special)) {
    alert("You must select at least one character set!");
    return null;
  }

  return { length, upperCase, lowerCase, number, special };
}

export function userOptions(upper, lower, num, spec, finalOptions) {
  var { lowerCase, upperCase, number, special } = finalOptions;
  var userArray = [];
  if (upperCase) {
    userArray.push(...upper);
  }
  if (lowerCase) {
    userArray.push(...lower);
  }
  if (number) {
    userArray.push(...num);
  }
  if (special) {
    userArray.push(...spec);
  }
  return userArray;
}

export function getRandom(userArray) {
  return userArray[Math.floor(Math.random() * userArray.length)];
}

export function generatePassword(length, userArray) {
  let passwordArray = [];
  for (let i = 0; i < length; i++) {
    passwordArray.push(getRandom(userArray));
  }
  return passwordArray.join("");
}

export function writePassword() {
  const finalOptions = getPasswordOptions();
  var userArray = userOptions(
    upperCasedCharacters,
    lowerCasedCharacters,
    numericCharacters,
    specialCharacters,
    finalOptions
  );
  return generatePassword(finalOptions.length, userArray);
}

export function copyToClipboard() {
  // Get the text field
  var copyText = document.querySelector('input[aria-label="Generated Password"]');


  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}