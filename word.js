const letter = require("./letter.js");

var Word = function (wordToGuess) {
    this.newLetterArray = [];
    this.stringIT = function() {
        var stringToArray = Array.from(wordToGuess);
        console.log(stringToArray);
        for (var i = 0; i < stringToArray.length; i++) {
            stringToArray[i];
        }
        console.log()
    }
}


var newWord = new Word ("Anthony");
console.log(newWord.stringIT());
