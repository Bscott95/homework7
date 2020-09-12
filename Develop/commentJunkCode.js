    // what is this for? They provided along with the api.js and generate Markdown.js files
    // {
    //     title: "What is the title of your project?"
    // },
    // {
    //     descritption: "Please describe your project."
    // },
    // {
    //     installation: "Please provide installation instructions."
    // },
    // {
    //     usage: "please provide usage instructions."
    // },
    // {
    //     contribution: "please provide contribution guidelines."
    // },
    // {
    //     testing: "please provide testing instructions."
    // }


// inquirer
//     .prompt({
//         message: "Enter your GitHub username",
//         name: "username"
//     })

//   .then(async ({ username }) => {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
//     try {
//       const { data } = await axios.get(queryUrl);
//       console.log(data)

//   axios.get(queryUrl).then(function ({ data }) {
//       console.log(data);
//       data.forEach((element) => {
//         repoArray.push(element.name);
//       });

//   const repoNames = data.map(repo => repo.name).join('\n');
//   console.log(repoNames);
// fs.writeFileSync('repos1.txt', username);
    //   fs.writeFile('repos.txt',repoNames, err => {
    //     if (err) {
    //       return console.log(err);
    //     }
    //   })

//     } catch (e) {
//     console.log(e)
// }

//   });

// then async to connect to github API and retrieve data