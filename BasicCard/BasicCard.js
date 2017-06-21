
var fs = require("fs");

var questions = require('./basicQuestions.txt');

var inquirer = require('inquirer');

//three arguments 1. which side, 2. userInput, 3. AnotherQuestion?
var questionPrompt = [
    {
        type: 'list',
        name: 'side',
        message: 'Which side of the card would you like to view?',
        choices: ['Front', 'Back']
    },
    {
        type: 'input',
        name: 'userAnswerInput',
        message: 'Please enter your answer',
        choices: ['Answer1'],
        filter: function(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'another',
        message: 'Would you like another question?',
        choices: ['Yes', 'No']
    }
]; // end question prompt

function generateQuestion() {
    fs.read('basicQuestions.txt', 'utf8', function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(questions[1]);
    })
}
generateQuestion();


function main() {
    whichSide();
}

function askForInput () {
    pleaseEnter();
}

function whichSide() {
    inquirer.prompt(questionPrompt[0]).then(function (answers) {
        if (answers.side === 'Front') {
            console.log('Question 1 Front');
            askForInput();
        } else if (answers.side === 'Back') {
            console.log('Question 1 Back');
            askForInput();
        }
    });
}

function pleaseEnter() {
    inquirer.prompt(questionPrompt[1]).then(function(answers) {
        if (answers.userAnswerInput === 'answer1') {
            console.log('correct!');
            anotherQuestion();
        } else {
            console.log('incorrect');
            anotherQuestion();
        }
    })
}

function anotherQuestion() {
    inquirer.prompt(questionPrompt[2]).then(function(answers) {
        if (answers.another === 'Yes') {
            console.log('OK! Another question!');
            //generateQuestion();
        } else {
            console.log('OK! Cya!');
        }
    })
}

main();


