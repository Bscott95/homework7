// const api = {
//   getUser(username) {

//   }
// };
const axios = require("axios")

async function api(username) {
  try {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const { data } = await axios.get(queryUrl);
    console.log(data[0].owner.avatar_url)
    const avatarURL = data[0].owner.avatar_url
    return avatarURL

  } catch (e) {
    console.log(e)
  }

};

module.exports = api



