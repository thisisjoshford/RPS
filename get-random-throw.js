//creates and exports function that will randomly generate a number between 0 and 2
export default function getRandomThrow() {
    return Math.round(Math.random() * 2);
}
// sets value of throwNumber to the randomly generated throw
const throwNumber = getRandomThrow();

