let letter = require('./letter');

let Word = function(arr) {
    this.newLetterArr = arr;
}

Word.prototype.stringRep = function() {
    for (let i = 0; i < Letter.length; i++) {
        Letter[i].rightGuess();
    }
}

Word.prototype.guessCall = function(char) {
    for (let i = 0; i < Letter.length; i++) {
        Letter[i].checkChar();
    }
}

Word.prototype.printWord = function() {
    console.log(this.newLetterArr);
}
module.exports = Word;