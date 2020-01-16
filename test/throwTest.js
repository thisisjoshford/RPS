import checkResult from '../checkResult.js';

const test = QUnit.test;

QUnit.module('throw results');

//these are tests that will check my CheckResult function 

test('are throws equal / tie', assert => {
    //setup the user guess
    const userThrow = 'rock' ;
    const robotThrow = 'rock';
    const expected = 'tie';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});

test('rock loses against paper ', assert => {
    //setup the user guess
    const userThrow = 'rock' ;
    const robotThrow = 'paper';
    const expected = 'loss';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});

test('rock beats scissors', assert => {
    //setup the user guess
    const userThrow = 'rock' ;
    const robotThrow = 'scissors';
    const expected = 'win';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});

test('paper gets cut by scissors(loss)', assert => {
    //setup the user guess
    const userThrow = 'paper' ;
    const robotThrow = 'scissors';
    const expected = 'loss';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});
test('paper covers rock (win)', assert => {
    //setup the user guess
    const userThrow = 'paper' ;
    const robotThrow = 'rock';
    const expected = 'win';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});
test('scissors cuts paper (win)', assert => {
    //setup the user guess
    const userThrow = 'scissors' ;
    const robotThrow = 'paper';
    const expected = 'win';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});

test('scissors gets broken by rock (loss)', assert => {
    //setup the user guess
    const userThrow = 'scissors' ;
    const robotThrow = 'rock';
    const expected = 'loss';
    const result = checkResult(userThrow, robotThrow);
    assert.equal(result, expected);
});