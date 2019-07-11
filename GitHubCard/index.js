/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards");

axios
  .get(`https://api.github.com/users/lkmarcum`)
  .then(data => {
    // action if successful
    console.log("user object", data);
    const user = createCard(data);
    cards.appendChild(user);
  })
  .catch(error => {
    // action if error
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(username => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(data => {
      // action if successful
      console.log("user object", data);
      const user = createCard(data);
      cards.appendChild(user);
    })
    .catch(error => {
      // action if error
      console.log(error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(user) {
  // create elements
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUser = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const profileLink = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");
  const cardGraph = document.createElement("div");
  const graphImg = document.createElement("img");
  const button = document.createElement("button");

  // set class names for styling
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUser.classList.add("username");
  cardGraph.classList.add("graph");
  cardImg.classList.add("card-img");

  // set content
  cardImg.src = user.data.avatar_url;
  cardName.textContent = user.data.name;
  cardUser.textContent = user.data.login;
  cardLocation.textContent = `Location: ${user.data.location}`;
  cardProfile.textContent = `Profile: `;
  profileLink.href = user.data.html_url;
  profileLink.textContent = user.data.html_url;
  cardFollowers.textContent = `Followers: ${user.data.followers}`;
  cardFollowing.textContent = `Following: ${user.data.following}`;
  cardBio.textContent = `Bio: ${user.data.bio}`;
  graphImg.src = `http://ghchart.rshah.org/${user.data.login}`;
  button.textContent = "Show Graph";

  // event listener for button
  button.addEventListener("click", event => {
    cardGraph.classList.toggle("graph-display");
    if (button.textContent === "Show Graph") {
      button.textContent = "Hide Graph";
    } else {
      button.textContent = "Show Graph";
    }
  });

  // set structure
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  card.appendChild(cardGraph);
  card.appendChild(button);
  cardGraph.appendChild(graphImg);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUser);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(profileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
