const api = require("./api.js");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");


const questions = [
    // what is this for? They provided along with the api.js and generate Markdown.js files
];

// can use for writing files
const writeFileAsync = util.promisify(fs.writeFile);


// inquirer prompt about username
inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(async ({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    try {
      const { data } = await axios.get(queryUrl);
      console.log(data)
      const repoNames = data.map(repo => repo.name).join('\n');
      console.log(repoNames);
      //       fs.writeFileSync('repos.txt', repoNames);
      fs.writeFile('repos.txt',repoNames, err => {
        if (err) {
          return console.log(err);
        }
      })

    } catch (e) {
      console.log(e)
    }

  });


// then async to connect to github API and retrieve data

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
