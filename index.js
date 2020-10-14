const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFilesAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
    type: "input",
    name: "title",
    message: "What is your project name?"
    },
    {
    type: "input",
    name: "description",
    message: "Please describe your project in detail for your REAME."
    },
    {
    type: "input",
    name: "installation",
    message: "What are the steps to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use."
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please provide any contribution guidelines.",
        choices: [
            "IBM", "MIT", "SIL", "Apache",
        ],
    },
    {
        type: "input",
        name: "badge",
        message: "Add something for badge."
    },   
    {
        type: "input",
        name: "credits",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "Provide example how to run the code."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?"
    },{
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    
]

)}; 

function writeToFile(answers) {
    return `
# ${answers.title}
### Description
${answers.description}
## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credits)
*[License](#license)
    
## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contribuiting
${answers.credits}

## Badges


## Tests
${answers.tests}

## Questions? Contact Me
GitHub: [${answers.github}]("https://github.com/${answers.github}")
Email: [${answers.email}]("mailto:${answers.email}") `

};

promptUser()
.then(function(answers) {
    const readMe = writeToFile(answers);
    return writeFilesAsync("README.md", readMe);
})
.then(function() {
    console.log("You did it!");
})
.then(function(err) {
    console.log(err); 
});