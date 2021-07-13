const { prompt } = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write of brief description of your project: '
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?'
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

    {
        type: 'input',
        name: 'license',
        message: 'Please list all appropriate licenses for your project: '
    },

    {
        type: 'input',
        name: 'test',
        message: 'Are there tests associated with your project?'
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Please list all contributors to your project, including yourself: '
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What is the code to install your project?'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(success)
    );
}


// TODO: Create a function to initialize app
async function init() {
    const reply = await prompt(questions);
    console.log(reply);
    writeToFile(reply)
}

function writeToFile(data) {
    const html = `
Name:
${data.name}

Title:
${data.title}

Description:
${data.description}

GitHub Username:
${data.githubUsername}

User email:
${data.userEmail}


## Table of Contents 

License:
${data.license}

Tests:
${data.test}

Usage:
${data.usage}

Contributors:
${data.contributors}

Installation:
${data.installation}

`

    fs.writeFile(`${data.name.replace(/ /g, '')}.md`, html, (err) => console.log(err || 'Your README file has been successfully created!'))

}

// Function call to initialize app
init();