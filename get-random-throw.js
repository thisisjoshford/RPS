//creates and exports function that will randomly generate a number between 1 and 3
export default function getRandomThrow() {
    return Math.round(Math.random() * 2);
}

let throwNumber = getRandomThrow();
console.log(throwNumber);
