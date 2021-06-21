// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterAmountRange = document.getElementById
('characterAmountRange')
var characterAmountNumber = document.getElementById
('characterAmountNumber')
var textarea = document.getElementById('passwordGeneratorForm')

// Write password to the #password input
function writePassword(e) {
  var value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)
