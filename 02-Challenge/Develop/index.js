// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync()
// }

// TODO: Create a function to initialize app
function init() {

    inquirer
     .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your application.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how your application is used.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0']
            // generateMarkdown(licenseQuestion.answer)
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed on this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe how to test functionality of your project.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'How would you prefer to be contacted?'
        },
     ])
     .then((answers) => {
         const markdown = generateMarkdown(answers);
         console.log(markdown)

        fs.writeFile('README.md', markdown, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        );
     });
}

// Function call to initialize app
init();


// const READMEContent = generateREADME(answers) =>
