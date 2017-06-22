var fs = require("fs");

var questions = require('./Questions.js');
//console.log(questions[0].question);

var inquirer = require('inquirer');

//three arguments 1. which side, 2. userInput, 3. AnotherQuestion?

var genQuestion = '';
var genAnswer = '';
var answer = '';

var welcome = function() {

    var question = {
        type: 'list',
        name: 'welcome',
        message: 'Welcome to the FlashCard App, would you like to begin with Basic Cards?',
        choices: ['Yes', 'No']
    }

    inquirer.prompt(question).then(function (answers) {
        if (answers.welcome === 'Yes') {
            console.log('Yes');
            basic();
        } else {
            console.log('OK - Try the Cloze Cards!');

        }
    });
}

//BASIC FUNCTION
var basic = function() {

    var question = {
        type: 'list',
        name: 'basic',
        message: 'Which side would you like to view?',
        choices: ['Front', 'Back']
    }

    inquirer.prompt(question).then(function (answers) {

        if (answers.basic === 'Front') {
            generateQuestion();

        } else {
            showAnswer();
        }
    });
}

function generateQuestion() {
    fs.readFile('./Questions.js', 'utf8', function(error, data) {


        if (error) {
            console.log(error);
        } else {
            genQuestion = console.log(questions[0].question);
            userInput();
        }
    })

}

function generateAnswer() {
    fs.readFile('./Questions.js', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genAnswer = questions[0].answer;
        }
    })
}

function showAnswer() {
    fs.readFile('./Questions.js', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genAnswer = questions[0].answer;
            console.log(genAnswer);
        }
    })
}

function userInput() {

    var input = {

        type: 'input',
        name: 'answerInput',
        message: 'Please input your answer (Case Sensitive): '
    }

    inquirer.prompt(input).then(function(value) {
        answer = value.answerInput;
        //console.log('value', value);
        //console.log('answer', answer);
        //console.log(answer.answerInput);
        //console.log(value.answerInput);
        //generateAnswer();
        verify();
    });
    generateAnswer();
}

function verify() {
    //generateAnswer();
    //console.log('genAnswer', genAnswer);
    if (answer == genAnswer) {
        console.log('correct!')
        anotherQuestion();
    } else {
        console.log('incorrect!');
        tryAgain();
    }
}

function anotherQuestion() {

    var another = {
        type: 'list',
        name: 'anotherQuestion',
        message: 'Would you like another question?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(another).then(function(answers) {
        if (answers.anotherQuestion === 'Yes') {
            console.log('OK! Another question!');
        } else {
            console.log('OK! Cya!');
        }
    });
}

function tryAgain() {

    var again = {
        type: 'list',
        name: 'tryAgain',
        message: 'Would you like to Try Again?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(again).then(function(answers) {
        if (answers.tryAgain === 'Yes') {
            console.log('OK! Try Again!');
            userInput();
        } else {
            console.log('OK! Dont Try Again!');
        }
    });
}

welcome();