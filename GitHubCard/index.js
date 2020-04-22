/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/*axios.get('https://api.github.com/users/stefxm')
  .then( response => {
    console.log(response.data);
    const newGitCard = GitHubCard(response.data);
   // entryPoint.appendChild('newGitCard')
  })
  .catch(error => {
    console.log('error', error);
  })*/
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

const followersArray = ["tetondan","dustinmyers","justsml","luishrd", "bigknell"];







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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
//me
const entryPoint = document.querySelector('.cards');
axios.get('https://api.github.com/users/stefxm')
  .then( response => {
    console.log(response.data);
     //const newGitCard = GitHubCard(response.data);
     entryPoint.append(GitHubCard(response.data));
     
    })
  .catch(error => {
    console.log('error', error);
  })
  //followers
  followersArray.forEach( (user) => {
    axios.get(`https://api.github.com/users/${user}`).then(response => {
      entryPoint.append(GitHubCard(response.data));
       
    })
  .catch(error => {
    console.log('error', error);
  })})


function GitHubCard(user) {

  let cardDiv = document.createElement('div');
  let cardImg = document.createElement('img');
  let cardInfoDiv = document.createElement('div');
  let nameH3 = document.createElement('h3');
  let userName = document.createElement('p');
  let locationp = document.createElement('p');
  let profilep = document.createElement('p');
  let profileLink = document.createElement('a')
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let biop = document.createElement('p');

  //classes
  cardDiv.classList.add('card'); //only use ".whatever" notation with queryselectors and css
  cardInfoDiv.classList.add('card-info');
  nameH3.classList.add('name');
  userName.classList.add('username');
 

  //content
  cardImg.src = user.avatar_url;
  nameH3.textContent = user.name;
  userName.textContent = user.login;
  locationp.textContent = `Location:${user.location}`;
  profileLink.src = user.html_url;
  profileLink.textContent = user.html_url;
  profilep.textContent = user.profileLink;
  followers.textContent = `Followers:${user.followers}`;
  following.textContent = `Following:${user.following}`;
  biop.textContent = `Bio:${user.bio}`;


  //append/ order MATTERS !
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(userName);
  cardInfoDiv.appendChild(locationp);
  cardInfoDiv.appendChild(profilep);
  profilep.appendChild(profileLink);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(biop);


  
  return cardDiv;
}
