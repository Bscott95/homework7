const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// const axios = require("axios")
// const api = require("./utils/api.js");

const questions = [
    "What is the title of your project?",
    "Please describe your project.",
    "Please provide installation instructions.",
    "Please provide usage instructions.",
    "what licenses should be associated with this project?",
    "Please provide contribution guidelines.",
    "Please provide testing instructions.",
    "What email should people contact you at for questions?",
    "What username is associated with your github profile?"
];

// can use for writing files
const writeFileAsync = util.promisify(fs.writeFile);

// inquirer prompt about username
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
            type: "checkbox",
            message: questions[4],
            choices:[],
            name: "license"
        });
        // {
        //     type: "checkbox",
        //     message: "What languages do you know?",
        //     choices:['HTML','CSS','JS','MySQL'],
        //     name: "userLanguages"
        //   }
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
    
        console.log(title, description, installation, usage, license, contribution, testing, username, email)

        await writeFileAsync('generatedREADME.md', generateMarkdown(title, description, installation, usage, license, contribution, testing, username, email))

    } catch (err) {
        // log the error in case something goes wrong
        console.log(err)
    }
}

init();
