var Letter = function(char, guessed) {
    this.char = char;
    this.guessed = guessed;
}

Letter.prototype.rightGuess = function() {
    if (guessed) {
        return char;
    } else {
        return "_";
    }
}

Letter.prototype.checkChar = function(guess) {
    if (guess === this.char) {
        guessed = true;
    }
}

Letter.prototype.printLetter = function() {
    console.log(this.char);
}

module.exports = Letter;