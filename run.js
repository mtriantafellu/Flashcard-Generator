
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
        message: 'Welcome to the FlashCard App, would you like to begin with Basic Cards or Cloze Cards?',
        choices: ['Basic', 'Cloze']
    }

    inquirer.prompt(question).then(function (answers) {
        if (answers.welcome === 'Basic') {
            console.log('Basic');
            basic();
        } else {
            console.log('Cloze');
            cloze();
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
            generateAnswer();
        }
    });
}

function generateQuestion() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {


        if (error) {
            console.log(error);
        } else {
            genQuestion = console.log(questions[0].question);
            userInput();
        }
    })

}

function generateAnswer() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genAnswer = questions[0].answer;
        }
    })
}

function userInput() {

    var input = {

        type: 'input',
        name: 'answerInput',
        message: 'Please input your answer: '
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
        name: 'again',
        message: 'Would you like to try again?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(again).then(function(answers) {
        if (answers.tryAgain === 'Yes') {
            console.log('OK Another Question!');
        } else {
            console.log('OK! Cya!');
        }
    });
}

welcome();






var fs = require("fs");

var questions = require('./Questions.js');
//console.log(questions[0].question);

var clozeQuestions = require('./ClozeQuestions.js');
//console.log(questions[0].question);

var inquirer = require('inquirer');

//three arguments 1. which side, 2. userInput, 3. AnotherQuestion?

var genQuestion = '';
var genAnswer = '';
var genClozeQuestion = '';
var genClozeAnswer = '';
var answer = '';

var welcome = function() {

    var question = {
        type: 'list',
        name: 'welcome',
        message: 'Welcome to the FlashCard App, would you like to begin with Basic Cards or Cloze Cards?',
        choices: ['Basic', 'Cloze']
    }

    inquirer.prompt(question).then(function (answers) {
            if (answers.welcome === 'Basic') {
                console.log('Basic');
                basic();
            } else {
                console.log('Cloze');
                cloze();
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
                generateAnswer();
            }
         });
}

function generateQuestion() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {


        if (error) {
            console.log(error);
        } else {
            genQuestion = console.log(questions[0].question);
            userInput();
        }
    })

}

function generateAnswer() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genAnswer = questions[0].answer;
        }
    })
}

function userInput() {

    var input = {

        type: 'input',
        name: 'answerInput',
        message: 'Please input your answer: '
    }

    inquirer.prompt(input).then(function(value) {
        answer = value.answerInput;
        //console.log('value', value);
        //console.log('answer', answer);
        //console.log(answer.answerInput);
        //console.log(value.answerInput);
        generateAnswer();
        verify();
    });
    //generateAnswer();
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
        if (answers.another === 'Yes') {
            console.log('OK! Another question!');
        } else {
            console.log('OK! Cya!');
        }
    });
}

function tryAgain() {
    var again = {
        type: 'list',
        name: 'again',
        message: 'Would you like to try again?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(again).then(function(answers) {
        if (answers.again === 'Yes') {
            userInput();
        } else {
            console.log('OK! Cya!');
        }
    });
}

welcome();


//=============== CLOZE FUNCTION ==============





var cloze = function() {

    var question = {
        type: 'list',
        name: 'cloze',
        message: 'Would you like a clozed question?',
        choices: ['Yes', 'No']
    }

    inquirer.prompt(question).then(function (answers) {

        if (answers.cloze === 'Yes') {
            generateClozeQuestion();

        } else {
            generateClozeAnswer();
        }
    });
}

function generateClozeQuestion() {
    fs.readFile('./ClozeQuestions.js', 'utf8', function(error, data) {


        if (error) {
            console.log(error);
        } else {
            genClozeQuestion = console.log(clozeQuestions[0].question);
            userClozeInput();
        }
    })

}

function generateClozeAnswer() {
    fs.readFile('./ClozeQuestions.txt', 'utf8', function(error, data) {

        if (error) {
            console.log(error);
        } else {
            genClozeAnswer = clozeQuestions[0].answer;
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
        answer = value.answerInput;
        //console.log('value', value);
        //console.log('answer', answer);
        //console.log(answer.answerInput);
        //console.log(value.answerInput);
        generateClozeAnswer();
        verifyCloze();
    });
    //generateAnswer();
}

function verifyCloze() {
    //generateAnswer();
    //console.log('genAnswer', genAnswer);
    if (answer == genClozeAnswer) {
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
        name: 'anotherQuestion',
        message: 'Would you like another question?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(another).then(function(answers) {
        if (answers.another === 'Yes') {
            console.log('OK! Another question!');
        } else {
            console.log('OK! Cya!');
        }
    });
}

function tryClozeAgain() {
    var again = {
        type: 'list',
        name: 'again',
        message: 'Would you like to try again?',
        choices: ['Yes', 'No']
    }
    inquirer.prompt(again).then(function(answers) {
        if (answers.again === 'Yes') {
            userClozeInput();
        } else {
            console.log('OK! Cya!');
        }
    });
}

welcome();
