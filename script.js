// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterAmountRange = prompt;
  var characterAmountNumber = prompt;
  var includeUppercase = confirm;
  var minimumCount = 0;
  var minimumUpperCases = "";
}

 var functionArray = {
     includeUppercase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

   if (minimumUpperCases === true) {
    minimumUpperCases = functionArray.includeUpperCases();
    minimumCount++;
}

var randomPasswordGenerated = "";

for (let i = 0; i < (parseInt(characterAmountRange) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  
return randomPasswordGenerated;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
