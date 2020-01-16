//this function checks the results of of the user selected throw vs. the robot's random throw...  it will then return a value of win loose or tie
export default function checkResult(userThrow, robotThrow) {
    if (userThrow === robotThrow) return 'tie';
    if (userThrow === 'rock' && robotThrow === 'paper') return 'loss';
    if (userThrow === 'rock' && robotThrow === 'scissors') return 'win';
    if (userThrow === 'paper' && robotThrow === 'scissors') return 'loss';
    if (userThrow === 'paper' && robotThrow === 'rock') return 'win';
    if (userThrow === 'scissors' && robotThrow === 'rock') return 'loss';
    if (userThrow === 'scissors' && robotThrow === 'paper') return 'win';
}
