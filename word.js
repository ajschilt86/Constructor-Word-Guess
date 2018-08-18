const Letter = require("./letter.js");



var Word = function (word) {
    this.wordArray = [];
    this.constructWordArray = function () {
        // blank array for spaces or letters to be pushed to once render() is run
       
        for (var i = 0; i < word.length; i++) {
            var newLetter = new Letter(word[i]);
            this.wordArray.push(newLetter);
        }
        // console.log(this.wordArray);
    };
    this.wordString = function () {
        var currentWord = [];
        for (var i = 0; i < this.wordArray.length; i++) {
            currentWord.push(this.wordArray[i].renderCharacter())
        }
        var displayWord = currentWord.join(" ");
        // console.log(currentWord);
        console.log(displayWord);
    }
};

// var myWord = new Word("Anthony");
// myWord.constructWordArray();
// myWord.wordString();


// var abc = new Word("Anthony")

// console.log(abc.stringIt());
// console.log(abc.wordGuess("A"));

module.exports = Word;