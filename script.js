// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {



    var numbers = "1234567890";
    var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var specialSymbol = '({}[]()~,;:.<>)';


    var passLink = parseInt(prompt("Please choose length set at least 8 characters to 128 characters"));
    var passNumber = confirm("Would you like to add numbers");
    var passLLettrs = confirm("Would you like to add lowercase letter");
    var passUCLettrs = confirm("Would you like to add uppercase letter");
    var passSC = confirm("Would you like to add special character");
    var newPassword = "";

    var password = "";

    if (passNumber) {
        password += numbers;
    }

    if (passLLettrs) {
        password += letters;
    }


    if (passUCLettrs) {
        password += capLetters
    }

    if (passSC) {
        password += specialSymbol;
    }


    for (var i = 0; i <= passLink; i++) {
        newPassword += password.charAt(Math.floor(Math.random() * password.length));
    }
    return newPassword;
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);