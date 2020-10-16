const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


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
    message: "Please describe your project in detail for your README."
    },
    {
    type: "input",
    name: "installation",
    message: "What are the steps to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Included screenshots as needed."
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please provide any contribution guidelines.",
        choices: [
            "MIT", "GPLv2", "Apache", "Other",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute to your application or package, please provide guidelines for how to do so."
    },
    {
        type: "input",
        name: "test",
        message: "If applicable, please provide any tests written for your application and provide examples on how to run them."
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

const writeFilesAsync = util.promisify(fs.writeFile);


function writeToFile(answers) {
    return `
# ${answers.title}
### Description
${answers.description}
## Table of Contents
\n* [Installation](#installation)
\n* [Usage](#usage)
\n* [Credits](#credits)
\n* [License](#license)
    
## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}%202.0-blue.svg)](https://opensource.org/licenses/${answers.license})

## Contribuiting
${answers.contributing}

## Tests
${answers.test}

## Questions? Contact Me
GitHub: [${answers.github}]("https://github.com/${answers.github}")
Email: [${answers.email}]("mailto:${answers.email}") `

};

promptUser()
.then(function(answers) {
    const readMe = writeToFile(answers);
    return writeFilesAsync("userREADME.md", readMe);
})
.then(function() {
    console.log("You did it!");
})
.catch(function(err) {
    console.log(err); 
});
