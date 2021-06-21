// Assignment Code
var generateBtn = document.querySelector("#generate");
var textarea = document.getElementById("password")
var characterAmountRange = document.getElementById
("characterAmountRange");
var characterAmountNumber = document.getElementById
("characterAmountNumber");
var includeUppercaseElement = document.getElementById
("includeUppercase")
var textarea = document.getElementById("passwordGeneratorForm");
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(67, 122)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)

textarea.addEventListener("submit", e => {
  e.preventDefault();
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var password = generatePassword(characterAmount, includeUppercase);

// Write password to the #password input
function writePassword(characterAmount, includeUppercase) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)
  var passwordText = document.querySelector("#password");
  
  var passwordCharacters = []
  for (let i = 0; i < characterAmount, i++) {
    var characterCode = charCodes[Math.random(Math.random() *
    characterAmount)]
    passwordCharacters.push (String.fromCharCode(charCodes))
    }
  return passwordCharacters.join()
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i + low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount (e) {
  var value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

})
