var inquirer = require("inquirer");
var questions1 = [
    {
        type: 'list',
        name: 'welcome',
        message: 'Welcome to the FlashCard App, would you like to begin with Basic Cards or Cloze Cards?',
        choices: ['Basic', 'Cloze']
    }
];
var question3 = function () {
    var question = [
        {
            type: 'input',
            name: 'userAnswerInput',
            message: 'Please enter your answer'
            // filter: function(val) {
            //     return val.toLowerCase();
            // }
        }
    ];
    inquirer.prompt(question)
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });}
var question2 = function () {
    var question = [
        {
            type: 'list',
            name: 'side',
            message: 'Please see question below:',
            choices: ['Front', 'Back']
        }
    ];
    inquirer.prompt(question)
        .then(function (data) {
            if(data.side === 'Front'){
                question3();

            } else{
                console.log("You select the Back")
            }
        })
        .catch(function (err) {
            console.log(err);
        });}
inquirer.prompt(questions1)
    .then(function (data) {
        if(data.welcome === 'Basic'){
            question2();
        } else{
            //inquirer.prompt(questions2)
            console.log("Hey I am cloze");
        }
    })
    .catch(function (err) {
        console.log(err);
    });