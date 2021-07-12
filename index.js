const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write of brief description of your project: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process of your project if applicable.'
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'What is your project used for?'
        },
        {
            type: 'input',
            name: 'projectLicense',
            message: 'Please list all appropriate licenses for your project: '
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list all contributors to your project, including yourself: '
        },
        {
            type: 'input',
            name: 'issue',
            message: 'What are the steps necessary if there is an issue? '
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter your Github username: '
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'Please enter your email: '
        },
    ])

    .then((response) =>
    fs.appendFile('./log.tx', JSON.stringify(response)), (err) => console.log(err));


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
    // ask questions
    // assemble Answers
    // 

// Function call to initialize app
init();