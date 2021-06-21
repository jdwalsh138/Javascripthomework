const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
characterAmountNumber.addEventListener("click", writePassword)
characterAmountRange.addEventListener("click", writePassword)
