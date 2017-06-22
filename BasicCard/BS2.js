
var fs = require("fs");

var questions = require('./Questions.js');
//console.log(questions[0].question);

var inquirer = require('inquirer');

//three arguments 1. which side, 2. userInput, 3. AnotherQuestion?


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
                //cloze();
            }
        });
}

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
var genQuestion = '';
function generateQuestion() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {


        if (error) {
            //console.log(error);
        } else {
            genQuestion = console.log(questions[0].question);
            userInput();
        }
    })

}
var genAnswer = '';
function generateAnswer() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {


        if (error) {
            //console.log(error);
        } else {
            genAnswer = console.log(questions[0].answer);
        }
    })
}

function userInput() {


    var input = {

        type: 'input',
        name: 'answerInput',
        message: 'Please input your answer: ',
        validate: function (value) {
            var str = value;
            var pass = str.match(genAnswer);

            if (pass) {
                return console.log('correct');
            } else {
            console.log('incorrect');
            }
        }

    }
    inquirer.prompt(input).then(function(value) {

    });

}



/*
            var validate = function(value) {

                var str = value;
                var pass = str.match(genAnswer);

                 if (pass) {
                     console.log('correct!');
                     } else {
                        console.log('incorrect!');
}
*/


welcome();

/*
var questionPrompt = [
    {
        type: 'list',
        name: 'welcome',
        message: 'Welcome to the FlashCard App, would you like to begin with Basic Cards or Cloze Cards?',
        choices: ['Basic', 'Cloze']
    },
    {
        type: 'list',
        name: 'side',
        message: 'Please see question below:',
        choices: ['Front', 'Back']
    },
    {
        type: 'input',
        name: 'userAnswerInput',
        message: "Question: ",
        //choices: [generatedQuestionBack],
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


function main() {
    welcome();
}

function welcome() {
    inquirer.prompt(questionPrompt[0]).then(function (answers) {
        if (answers.welcome === 'Basic') {
            console.log('Front');
            whichSide();
        } else if (answers.side === 'Back') {
            console.log('Back');
            whichSide();
        }
    });
}


//function to generate the question pulling from Questions.js file
function generateQuestion() {
    fs.readFile('./Questions.txt', 'utf8', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            generatedQuestionFront = console.log(questions[0].question);
            //generatedQuestionBack = console.log(questions[0].answer);
            //console.log(questions[0].question)
        }
    })
}

function whichSide() {
    inquirer.prompt(questionPrompt[1]).then(function (answers) {
        if (answers.side === 'Front') {
            generateQuestion();
            //console.log(generatedQuestionFront);
            pleaseEnter();

        } else {
            generateQuestion();
            //console.log(generatedQuestionBack);
            pleaseEnter();
        }
    });
}


function pleaseEnter() {
    inquirer.prompt(questionPrompt[2]).then(function (answers) {
        if (answers.userAnswerInput === 'generatedQuestionBack') {
            console.log('correct!');
            anotherQuestion();
        } else {
            console.log('incorrect');
            anotherQuestion();
        }
    })
}

function anotherQuestion() {
    inquirer.prompt(questionPrompt[3]).then(function(answers) {
        if (answers.another === 'Yes') {
            console.log('OK! Another question!');
            //generateQuestion();
        } else {
            console.log('OK! Cya!');
        }
    })
}

main();
    */