console.log("Here we go! You've got this ;D")

const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name.",
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project title.",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your product? Provide instructions here.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for use.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Add the URL to a screenshot.",
    },

    {
        type: "list",
        message: "Please choose your license.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "last one"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please add any contributions.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any test instructions here.",
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please add the link to your GitHub profile. This will be added under the 'Questions' section.",
    },
    {
        type: "input",
        name: "email",
        message: "Please add your email address. This will be added under the 'Questions' section.",
    },

];


// function to write README file
// function writeToFile(fileName, data) {
// }



// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("./utils/README.md", generateMarkdown(answers), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("README has been created!");
        });

    })
}

// function call to initialize program
init();
