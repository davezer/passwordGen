// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Set all variables here
var passwordLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;
var userChoice;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "<", ">", "{", "}", "/", "?", "~"];







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();







// function generatePassword(pLength){

  //   var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
  //   var passLength = 75;
  //   var password = "";
  
  //   for (var i = 0; i <= passLength; i++) {
  //     var randomNumber = Math.floor(Math.random() * chars.length);
  //     password += chars.substring(randomNumber, randomNumber + 1);
  //   }
  
  //   document.getElementById("password").value = password;

  // }
  
   