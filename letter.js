var inquirer = require("inquirer");




var Space = function (letter) {
    this.character = letter;
    this.guessed = true;
    this.render = function() {
        if (this.guessed === true) {
            console.log(letter);
        } else {
            console.log("_");
        }
    };
    this.check = function () {
        inquirer.prompt([
            {   
                name: "guess",
                message: "Guess a letter A-Z"
            }
        ]).then(function(answers) {
            if (answers.guess === letter) {
                guessed = true;
                console.log(answers.guess);
                console.log("Good Job!");
            } else {
                guessed = false;
                console.log("Guess Again!");
            }
        })
    };

};

var newLetter = new Space("a");


// console.log(newLetter);

// console.log(newLetter.render());
// console.log(newLetter.check());

module.exports = Space;



