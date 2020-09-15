const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

// questions that requirer user input
const questions = [
    "What is the title of your project?",
    "Please describe your project.",
    "Please provide installation instructions.",
    "Please provide usage instructions.",
    "What licenses should be associated with this project? Only chose ONE",
    "Please provide contribution guidelines.",
    "Please provide testing instructions.",
    "What email should people contact you at for questions?",
    "What username is associated with your github profile?"
];

// can use for writing files
const writeFileAsync = util.promisify(fs.writeFile);

// inquirer prompt about username for various values
async function init(){
    try {
        const { title } = await inquirer.prompt({
            message: questions[0],
            name: "title"
        });
        const { description } = await inquirer.prompt({
            message: questions[1],
            name: "description"
        });
        const { installation } = await inquirer.prompt({
            message: questions[2],
            name: "installation"
        });
        const { usage } = await inquirer.prompt({
            message: questions[3],
            name: "usage"
        });
        const { license } = await inquirer.prompt({
            type: "list",
            message: questions[4],
            choices:['MIT License','Apache 2.0 License', 'GNU GPL v3'],
            name: "license"
        });
        const { contribution } = await inquirer.prompt({
            message: questions[5],
            name: "contribution"
        });
        const { testing } = await inquirer.prompt({
            message: questions[6],
            name: "testing"
        });
        const { email } = await inquirer.prompt({
            message: questions[7],
            name: "email"
        });
        const { username } = await inquirer.prompt({
            message: questions[8],
            name: "username"
        });
    
        // Depending on the user inputed license value, updates licenseBadge with the correstponding code required for a badge
        let licenseBadge = ''
        if (license === 'MIT License'){
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (license === 'Apache 2.0 License'){
            licenseBadge = '  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (license === 'GNU GPL v3'){
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        } else {
            licenseBadge = ''
        }

        // console.log(title, description, installation, usage, license, contribution, testing, username, email)
        
        // Writes a file called generatedREADME.md using the generateMarkdown function in a tangential file. Passes along the user inputed values and the value of the api function which gets the profile pic url link
        await writeFileAsync('generatedREADME.md', generateMarkdown(title, licenseBadge, description, installation, usage, license, contribution, testing, username, email, await api(username)))

    } catch (err) {
        // log the error in case something goes wrong
        console.log(err)
    }
}

// calls main function
init();
