let name = prompt('What is your name?')
let input = prompt("Guess a number");
let inputNumber = Number(input)
var secretNum = 42
var attempts = 1
var guesses = [inputNumber];
let players = {}
function play() {
    if (inputNumber !== secretNum) {
        wrong()
    } else if (inputNumber === secretNum) {
        right()
    };
    play()
}
function wrong(){
//while the guessed number is not correct,
while (inputNumber !== secretNum) {
    if (inputNumber < secretNum) {
        //if they guess too low
        alert('Sorry ' + name + ', Guess higher');
        //resets the prompt
        inputNumber = Number(prompt('Guess a number'))
        //if they guess too high
    } else {
        alert( 'Sorry ' + name + ', Guess lower');
        inputNumber = Number(prompt('Guess a number'))
        
    } //increment the guesses
    attempts++ 
    guesses.push(inputNumber)
}
}
//if they guess correctly
function right() {
 if (inputNumber === secretNum) {
    if (players[name] === undefined) {
        alert('That\'s correct ' + name + '! Your previous guesses were: ' + guesses);
        players[name] = guesses.length
    } else {
        var prevScore = players[name]
        var currentScore = guesses.length
        var newScore = prevScore - currentScore
        alert('Correct! you beat your previous score by ' + newScore)
    }
 }
 playAgain()
}

function playAgain() {
var playAgain = prompt('Do you want to play again?', 'yes or no');
 if (playAgain === 'yes') {
    inputNumber = Number(prompt('Guess a number'));
 } else {
    alert('Thanks for playing')
 }
}

play()
