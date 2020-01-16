import getRandomThrow from './get-random-throw.js';
const shootButton = document.getElementById('shootButton');

shootButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    const userThrow = userChoice.value;
    
    const robotThrowNumber = getRandomThrow();
    
    let robotThrow = '';
    
    if (robotThrowNumber === 0) {
        robotThrow = 'rock';
    }
    if (robotThrowNumber === 1) {
        robotThrow = 'paper';
    }
    if (robotThrowNumber === 2) {
        robotThrow = 'scissors';
    }
    
    console.log(userChoice);
    console.log(userThrow);
    console.log(robotThrowNumber);
    console.log(robotThrow);
});
