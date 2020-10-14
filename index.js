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

promptUser();