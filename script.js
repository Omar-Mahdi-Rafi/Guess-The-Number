'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

let random = Math.floor(Math.random() * 20) + 1;

console.log(random);

let score = Number(document.querySelector('.score').textContent);

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When player wins
  } else if (guess === random) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.score').value += 1;
    document.querySelector('.number').textContent = random;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is out of range
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Out of range guess!';

    //Too distant guess
  } else if (guess > random + 2 || guess < random - 2) {
    if (score > 1) {
      if (guess > random + 2) {
        document.querySelector('.message').textContent = 'Too high';
      } else {
        document.querySelector('.message').textContent = 'Too low';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //Close calls
  else if (guess <= random + 2 && guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Close enough';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < random && guess > random - 2) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Close enough';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});

//event handler as the second argument to addEventListener method
