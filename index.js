// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'titleOfProject',
        },
        // {
        //     type: 'checkbox',
        //     message: 'What languages do you know?',
        //     name: 'name',
        // },
        {
            type: 'type',
            message: 'Enter a description of your project',
            name: 'description',
        },
        {
            type: 'type',
            message: 'Describe the Installation.',
            name: 'installation',
        },
        {
            type: 'type',
            message: 'What usage does your project have?',
            name: 'usage',
        },
        {
            type: 'type',
            message: 'Enter the license for your project.',
            name: 'license',
        },
        {
            type: 'type',
            message: 'Mention who contributed to the project',
            name: 'contributed',
        },
        {
            type: 'type',
            message: 'What tests did you have on your project?',
            name: 'tests',
        },
        {
            type: 'type',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'type',
            message: 'What is the link to github repository?',
            name: 'github',
        },
    ]).then(answers => {
        console.log(answers);
       // fs.writeFile('ans')
    })
}

// Function call to initialize app
init();