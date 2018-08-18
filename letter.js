// var inquirer = require("inquirer");



var Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;
    this.renderCharacter = function () {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    };
    this.check = function (letter) {
        if (letter = this.letter) {
            this.guessed = true;          
        } else {
            this.guessed = false;          
        }
    };



    // this.check = function() {
    //     inquirer.prompt ([
    //         {
    //             name: "guess",
    //             message: "Guess a letter..."
    //         }
    //     ]).then(function(answers) {
    //         if (answers.guess === letter) {
    //             guessed = true;
    //             console.log(answers.guess);
    //             console.log("Correct!");
    //         } else {
    //             guessed = false;
    //             console.log("Guess again");
    //         }
    //     });
    // };
}


// var test = new Space("A");
// console.log(test);
// console.log(test.render());
// console.log(test.check("A"));

module.exports = Letter;