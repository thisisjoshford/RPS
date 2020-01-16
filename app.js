//imports getRandomThrow and checkResult function
import getRandomThrow from './get-random-throw.js';
import checkResult from './checkResult.js';
const shootButton = document.getElementById('shootButton');
const gameResult = document.getElementById('gameResult');
const robotChoice = document.getElementById('robotChoice');
const robotChoiceDisplay = document.getElementById('robotChoiceDisplay');

//shoot button working on click... gets the user input and computers random input then compares and returns a result back to the DOM
shootButton.addEventListener('click', () => {
    //gets the input from the radio button on the DOM and sets value to the userThrow
    const userChoice = document.querySelector('input:checked');
    const userThrow = userChoice.value;
    //gets the robot's throw number from the gerRandomThrow function that was imported 
    const robotThrowNumber = getRandomThrow();
    //sets an empty container for the robotTrow
    let robotThrow = '';
    //takes the random throw number generated and changes it to rock, paper, or scissors so we can compare results
    if (robotThrowNumber === 0) { robotThrow = 'rock'; }
    if (robotThrowNumber === 1) { robotThrow = 'paper'; }
    if (robotThrowNumber === 2) { robotThrow = 'scissors'; }
    //sets an empty container for the results
    let result = '';
    //compares the user's choice with that of the robot and lets us know if we won, lost, or tied
    result = checkResult(userThrow, robotThrow);
    //checks the result and updates the gameResult element on the DOM to display results to user
    if (result === 'win') 
        gameResult.textContent = 'YESSSSSSS! You WON!!!';
    if (result === 'loss')
        gameResult.textContent = 'oh Noooo! You Loose...';
    if (result === 'tie')
        gameResult.textContent = 'its a DRAW...';
    //changes the robot throw results to uppercase
    robotChoice.textContent = robotThrow.toUpperCase();
    //removes the hidden class on click and displays "the robot's choice was" text
    robotChoiceDisplay.classList.remove('hidden');
});
