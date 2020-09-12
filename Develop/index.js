// const api = require("./utils/api.js");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios")


const questions = [
    "What is the title of your project?",
    "Please describe your project.",
    "Please provide installation instructions.",
    "please provide usage instructions.",
    "please provide contribution guidelines.",
    "please provide testing instructions."
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
        const { contribution } = await inquirer.prompt({
            message: questions[4],
            name: "contribution"
        });
        const { testing } = await inquirer.prompt({
            message: questions[5],
            name: "testing"
        });
    
        console.log(title, description, installation, usage, contribution, testing)

        await writeFileAsync('README.md', title + '\n' + description + '\n' + installation + '\n' + usage + '\n' + contribution + '\n' + testing)
        await writeFileAsync('README.md', title + '\n' + description + '\n' + installation + '\n' + usage + '\n' + contribution + '\n' + testing)

        1. [ Description. ](#desc)
        2. [ Usage tips. ](#usage)
        
        <a name="desc"></a>
        ## 1. Description
        
        sometext
        
        <a name="usage"></a>
        ## 2. Usage tips
        

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
