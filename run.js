var fs = require("fs");

var questions = require('./Questions.js');
//console.log(questions[0].question);
var clozeQuestions = require('./QuestionsCloze.js');
//console.log(questions[0].question);

var inquirer = require('inquirer');

// Three arguments 1. which side, 2. userInput, 3. AnotherQuestion?
// For Basic:
var genQuestion = '';
var genAnswer = '';
var answer = '';

// For Cloze:
var genClozeQuestion = '';
var genClozeAnswer = '';
var clozeAnswer = '';
var genfullText = '';

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
            clozeWelcome();
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

//=========== End Basic =============

//=========== Start Cloze =============

var clozeWelcome = function() {

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

//CLOZE FUNCTION
var clozeWelcome = function() {

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