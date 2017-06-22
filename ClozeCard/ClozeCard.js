var fs = require("fs");

var clozeQuestions = require('./QuestionsCloze.js');
//console.log(questions[0].question);

var inquirer = require('inquirer');

//three arguments 1. which side, 2. userInput, 3. AnotherQuestion?

var genClozeQuestion = '';
var genClozeAnswer = '';
var clozeAnswer = '';
var genfullText = '';

var welcome = function() {

    var question = {
        type: 'list',
        name: 'welcome',
        message: 'Welcome to the FlashCard App, would you like to View a Cloze Card??',
        choices: ['Yes', 'No']
    }

    inquirer.prompt(question).then(function (answers) {
        if (answers.welcome === 'Yes') {
            console.log('Yes');
            cloze();
        } else {
            console.log('No');
            console.log('OK - Try the basic.js');
        }
    });
}

//BASIC FUNCTION
var cloze = function() {

    var question = {
        type: 'list',
        name: 'cloze',
        message: 'Would you like to see a question?  The Answer? Or the Full Text?',
        choices: ['Question', 'Answer', 'FullText']
    }

    inquirer.prompt(question).then(function (answers) {

        if (answers.cloze === 'Question') {
            generateClozeQuestion();

        } else if (answers.cloze === 'Answer') {
            showClozeAnswer();

        } else if (answers.cloze === 'FullText') {
            showFullText();
        }
    });
}

function generateClozeQuestion() {
    fs.readFile('./QuestionsCloze.js', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genClozeQuestion = console.log(clozeQuestions[0].question);
            userClozeInput();
        }
    })
}

function generateClozeAnswer() {
    fs.readFile('./QuestionsCloze.js', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genClozeAnswer = clozeQuestions[0].answer;

        }
    })
}

function showClozeAnswer() {
    fs.readFile('./QuestionsCloze.js', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genClozeAnswer = clozeQuestions[0].answer;
            console.log('The Answer is: ', genClozeAnswer);
        }
    })
}

function showFullText() {
    fs.readFile('./QuestionsCloze.js', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genFullText = clozeQuestions[0].fullText;
            console.log('The Full Text is: ', genFullText);
        }
    })
}

function userClozeInput() {

    var input = {

        type: 'input',
        name: 'answerInput',
        message: 'Please input your answer: '
    }

    inquirer.prompt(input).then(function(value) {
        clozeAnswer = value.answerInput;
        //console.log('value', value);
        //console.log('answer', answer);
        //console.log(answer.answerInput);
        //console.log(value.answerInput);
        //generateAnswer();
        verifyCloze();
    });
    generateClozeAnswer();
}

function verifyCloze() {
    //generateAnswer();
    //console.log('genAnswer', genAnswer);
    if (clozeAnswer == genClozeAnswer) {
        console.log('correct!')
        anotherClozeQuestion();
    } else {
        console.log('incorrect!');
        tryClozeAgain();
    }
}

function anotherClozeQuestion() {

    var another = {
        type: 'list',
        name: 'anotherClozeQuestion',
        message: 'Would you like another question?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(another).then(function(answers) {
        if (answers.anotherClozeQuestion === 'Yes') {
            console.log('OK! Another question!');
        } else {
            console.log('OK! Cya!');
        }
    });
}

function tryClozeAgain() {

    var again = {
        type: 'list',
        name: 'tryClozeAgain',
        message: 'Would you like to Try Again?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(again).then(function(answers) {
        if (answers.tryClozeAgain === 'Yes') {
            console.log('OK! Try Again!');
            userClozeInput();
        } else {
            console.log('OK! Dont Try Again!');
        }
    });
}

welcome();