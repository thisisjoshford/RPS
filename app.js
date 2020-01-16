//imports getRandomThrow and checkResult function
import getRandomThrow from './get-random-throw.js';
import checkResult from './checkResult.js';
const shootButton = document.getElementById('shootButton');
const gameResult = document.getElementById('gameResult');

shootButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    const userThrow = userChoice.value;
    
    const robotThrowNumber = getRandomThrow();
    
    let robotThrow = '';
    
    if (robotThrowNumber === 0) { robotThrow = 'rock'; }
    if (robotThrowNumber === 1) { robotThrow = 'paper'; }
    if (robotThrowNumber === 2) { robotThrow = 'scissors'; }

    let result = '';

    result = checkResult(userThrow, robotThrow);

    if (result === 'win') 
        gameResult.textContent = 'congratulations!  You Won!!!';
    if (result === 'loss')
        gameResult.textContent = 'sorry... You lose!';
    if (result === 'tie')
        gameResult.textContent = 'its a Tie!';

    
    console.log(result);
    console.log(userChoice);
    console.log(userThrow);
    console.log(robotThrowNumber);
    console.log(robotThrow);
});
