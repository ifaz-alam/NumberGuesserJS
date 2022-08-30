'use strict';
// we need a random number to be defined
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define a state variable for our score
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    // handle guesses
    
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number!';
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "✅ Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        // select the body and change its CSS style
        document.querySelector('body').style.backgroundColor = '#60b347';

        // change the width of number box
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 You guessed too high!' : '📉 You guessed too low!';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You ran out of guesses!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    // restore initial values of the score and number variables
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // restore the initial conditions of the message, number, score and guess input field
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    // select the body and change its CSS style
    document.querySelector('body').style.backgroundColor = '#222';

    // change the width of number box
    document.querySelector('.number').style.width = '15rem';
    
});
