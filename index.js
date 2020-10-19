const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

//Questions to ask the user about their project
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

//Generates the users answers to the correct file and creates a readme file based on the users answers
promptUser()
.then(function(answers) {
    const readMe = generateMarkdown(answers);
    return writeFilesAsync("userREADME.md", readMe);
})
.then(function() {
    console.log("You did it!");
})
.catch(function(err) {
    console.log(err); 
});
