// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Set all variables here

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;
var user;

// set arrays

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

// start function here    	
function generatePassword() {
	// Ask for user Input
	passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");
	// alert if user inputs nothing
	if (!passwordLength) {
	alert("Required value");
		//if user inputs anything outside of set parameters 8 and 128
		} else if (passwordLength < 8 || passwordLength > 128) {
		passwordLength = prompt("You must choose between 8 and 128");
				
			} else { 
				confirmLower = confirm("Will this contain lower case letters?");
				confirmUpper = confirm("Will this contain upper case letters?");
				confirmNumber = confirm("Will this contain numbers?");
				confirmSpecial = confirm("Will this contain special characters?");
	
	};
	// if no answer
	if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
		user = alert("You must choose SOME characters!");
		// if all character types are selected use 
	} 	else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
			user = lowerCase.concat(upperCase, numbers, special);
			console.log(user);
		}
		// if 3 selections
		else if (confirmLower && confirmUpper && confirmNumber) {
			user = lowerCase.concat(upperCase, numbers);
		} 
		else if (confirmLower && confirmUpper && confirmSpecial) {
			user = lowerCase.concat(upperCase & special);
		} 
		else if  (confirmLower && confirmNumber && confirmSpecial) {
			user = lowerCase.concat(numbers, special);
		}
		else if (confirmUpper && confirmNumber && confirmSpecial){
			user = upperCase.concat(numbers, special);
		}
		// if 2 selections
		else if (confirmLower && confirmUpper){
			user = lowerCase.concat(upperCase);
		}
		else if (confirmLower && confirmNumber){
			user = lowerCase.concat(numbers);
		}
		else if (confirmLower && confirmSpecial){
			user = lowerCase.concat(special);
		}
		else if (confirmUpper && confirmNumber){
			user = upperCase.concat(numbers);
		}
		else if (confirmUpper && confirmSpecial){
			user = upperCase.concat(special);
		}
		else if (confirmNumber && confirmSpecial){
			user = numbers.concat(special);
		}

		// if 1 selection
		else if (confirmLower){
			user = lowerCase;
		}
		else if (confirmUpper){
			user = upperCase;
		}
		else if (confirmNumber){
			user = numbers;
		}
		else if (confirmSpecial){
			user = special;
		};
	// empty array variable for length
	var passwordBlank = [];

	for (var i = 0; i < passwordLength; i++){
		var allChoices = user[Math.floor(Math.random() * user.length)];
		passwordBlank.push(allChoices);
	}

	var password = passwordBlank.join("");
	return password;
};

	
	generatePassword();






