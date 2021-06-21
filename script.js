var generateBtn = document.querySelector("#generate");

// Special characters for the function created
var specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var minimumCount = 0;
  var minimumUpperCases = "";


  var functionArray = [
    function getUpperCases() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
  ];

  // Checks to make sure user selected ok for all and uses empty minimums from above

if (upperCases === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumUpperCases;


  return randomPasswordGenerated;

}
