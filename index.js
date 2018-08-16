const prompt = require("prompt");
const inquirer = require("inquirer");

const letter = require("./letter.js");
const word = require("./word.js");

console.log("   =================================================================================== " +
            "\n#                                                                                       #" +
            "\n#                      **    *    *****    *****       ******                           #" +
            "\n#                      * *   *   *     *   *     *     *                                #" +
            "\n#                      *  *  *  *       *  *      *    ****                             #" +
            "\n#                      *   * *   *     *   *     *     *                                #" +
            "\n#                      *    **    *****    *****       ******                           #" +
            "\n#                                                                                       #" +
            "\n#    *     *      **      **    *     ****        *       *          **      **    *    #" +
            "\n#    *     *     *  *     * *   *   *            * *     * *        *  *     * *   *    #" +
            "\n#    *******    ******    *  *  *   *  ****     *   *   *   *      ******    *  *  *    #" +
            "\n#    *     *   *      *   *   * *   *     *    *     * *     *    *      *   *   * *    #" +
            "\n#    *     *  *        *  *    **    *****    *       *       *  *        *  *    **    #" +
            "\n#                                                                                       #" +
            "\n  ====================================================================================");

console.log("" +
            "\nWelcome to Node Hangman. Guess a letter to begin!" +
            "\n" +
            "\nYou have 5 tries to get the word correct, be careful!" +
            "\n");         


var wordChoices = ["Washington", "Illinois", "Kansas", "Idaho", "Florida"]

function wordChoice() {
    var randomNumber = Math.floor(Math.random() * 5);
    var actualWord = wordChoices[randomNumber];
    console.log(actualWord);
    return actualWord;
}

// wordChoice();

var displayWord = new word(wordChoice());
console.log(displayWord.stringIt());

var guessArray = [];

inquirer.prompt([
    {
        name: "guess",
        message: "Guess a letter..."
    }
]).then(function (answers) {
    displayWord.wordGuess(answers.guess);
    var test = new letter();
    console.log(test.check());
    console.log(displayWord.stringIt());
    if (answers.guess === true) {
        guessArray.push(answers.guess);
        console.log(guessArray);
    }
    
});
