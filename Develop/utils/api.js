// const api = {
//   getUser(username) {

//   }
// };

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
    //   const repoNames = data.map(repo => repo.name).join('\n');
    //   console.log(repoNames);
    //   fs.writeFile('repos.txt',repoNames, err => {
    //     if (err) {
    //       return console.log(err);
    //     }
    //   })

    } catch (e) {
      console.log(e)
    }

  });

module.exports = {
  api: api
}

// The README will be populated with the following:

// * At least one badge
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


