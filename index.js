var Word = require("./word");
var Letter = require("./letter");
var inquirer = require('inquirer');
var wordsArr = ["gym", "tan", "laundry", "juicehead", "gorilla", "guido"];

var randomWord = wordsArr[Math.floor(Math.random() * 2)].split('');
var random = new Word(randomWord);
var guessWord = random.newLetterArr;
var blankArr = guessWord.map(x => "_");
console.log(blankArr.toString().replace(/,/g, ' '));

var livesLeft = 5;

var inq = function () {
    inquirer
        .prompt([{
            "name": "guess",
            "message": "What is your guess?"
        }]).then(function (answers) {
            var ind = guessWord.indexOf(answers.guess);
            if (ind !== -1) {
                blankArr[ind] = guessWord[ind];
                guessWord[ind]= "_";
                console.log("CORRECT!");
                if (blankArr.indexOf('_') === -1) {
                    console.log(blankArr.toString().replace(/,/g, ' '));
                    console.log("You win!");
                    process.exit();
                }
                console.log(blankArr.toString().replace(/,/g, ' '));
                console.log("Lives remaining = " + livesLeft);
                inq();
            } else {
                livesLeft--;
                console.log("WRONG!");
                if (livesLeft < 1) {
                    console.log("You lose!");
                    process.exit();
                }
                console.log("Lives remaining = " + livesLeft);
                console.log(blankArr.toString().replace(/,/g, ' '));
                if (blankArr.indexOf(answers.guess)) {
                    blankArr[guessWord.indexOf(answers.guess)] = guessWord[guessWord.indexOf(answers.guess)];
                } else {
                    console.log(blankArr.toString().replace(/,/g, ' '));
                }
                inq();
            }
            
        });
}
inq();