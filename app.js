//imports getRandomThrow and checkResult function
import getRandomThrow from './get-random-throw.js';
import checkResult from './checkResult.js';
//getting some quality DOM right here...
const shootButton = document.getElementById('shootButton');
const gameResult = document.getElementById('gameResult');
const robotChoice = document.getElementById('robotChoice');
const robotChoiceDisplay = document.getElementById('robotChoiceDisplay');
const number_of_throws = document.getElementById('numberOfThrows');
const number_of_wins = document.getElementById('numberOfWins');
const number_of_losses = document.getElementById('numberOfLosses');
const number_of_ties = document.getElementById('numberOfTies');
//sets empty containers for number of throws, wins, and losses globaly, not in button function so button doesn't reset 
let numberOfThrows = 0;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfTies = 0;
//shoot button working on click... gets the user input and computers random input then compares and returns a result back to the DOM
shootButton.addEventListener('click', () => {
    //increment number of throws plus 1
    numberOfThrows++;
    //gets the input from the radio button on the DOM and sets value to the userThrow
    const userChoice = document.querySelector('input:checked');
    const userThrow = userChoice.value;
    //console.log(numberOfThrows);
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
    if (result === 'win') {
        gameResult.textContent = 'YESSSSSSS! You WON!!!';
        numberOfWins++;
        number_of_wins.textContent = numberOfWins;}
    if (result === 'loss'){
        gameResult.textContent = 'oh Noooo! You Loose...';
        numberOfLosses++;}
        number_of_losses.textContent = numberOfLosses;
    if (result === 'tie'){
        numberOfTies++;}
        gameResult.textContent = 'its a DRAW...';
    number_of_ties.textContent = numberOfTies;
    number_of_throws.textContent = numberOfThrows;
    console.log(numberOfWins, numberOfLosses,numberOfTies, numberOfThrows);
    //changes the robot throw results to uppercase
    robotChoice.textContent = robotThrow.toUpperCase();
    //removes the hidden class on click and displays "the robot's choice was" text
    robotChoiceDisplay.classList.remove('hidden');
});
