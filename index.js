const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
            name: 'installation',
            message: 'Describe the installation process of your project if applicable.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your project used for?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please list all appropriate licenses for your project: '
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list all contributors to your project, including yourself: '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are there tests associated with your project?'
        },
        {
            type: 'input',
            name: 'issue',
            message: 'What are the steps necessary if there is an issue?'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(success)
    );
}


// TODO: Create a function to initialize app
async function init() {
    const reply = await prompt();
    console.log(reply);
    writeHTML(reply)
}

function writeHTML(data) {
    const html = `

Name:
${data.name}

Description:
${data.description}

GitHub Username:
${data.githubUsername}

User email:
${data.userEmail}

Title:
${data.title}

## Table of Contents 

Description:
${data.description}

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


</html>`

    fs.writeFile(`${data.name.replace(/ /g, '')}.md`, html, (err) => console.log(err || 'success!'))

}

// Function call to initialize app
init();