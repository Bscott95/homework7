// const api = require("./utils/api.js");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown")


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
async function main(){
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
            message: questions[4],
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
    
        console.log(title, description, installation, usage, contribution, testing)

        // await writeFileAsync('README.md', title + '\n' + description + '\n' + installation + '\n' + usage + '\n' + contribution + '\n' + testing)
        await writeFileAsync('generatedREADME.md', generateMarkdown(title, description, installation, usage, license, contribution, testing, username, email))

        // 1. [ Description. ](#desc)
        // 2. [ Usage tips. ](#usage)
        
        // <a name="desc"></a>
        // ## 1. Description
        
        // sometext
        
        // <a name="usage"></a>
        // ## 2. Usage tips
        

    } catch (err) {
        // log the error in case something goes wrong
        console.log(err)
    }
}
main()


// Write a new file that appends the following:
// At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email



function writeToFile(fileName, data) {
}

function init() {

}

init();
