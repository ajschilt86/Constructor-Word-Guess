const prompt = require("prompt");
const inquirer = require("inquirer");

const letter = require("letter.js");
const word = require("word.js");

var wordOptions = ["Washington,", "Illinois", "Kansas", "Idaho", "Florida"]

function wordChoice() {
    var randomNumber = Math.random()*5;
    var actualWord = wordOptions[randomNumber];
    console.log(actualWord);
}

wordOptions();