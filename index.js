// const prompt = require("prompt");
// const inquirer = require("inquirer");

// const letter = require("./letter.js");
// const word = require("./word.js");

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


var myWords = ["Washington", "Illinois", "Kansas", "Idaho", "Florida"]

function selectWord() {
    var word = myWords[Math.floor(Math.random() * myWords.length)];
    console.log(word);
}

selectWord();


