const areasUrl = 'data/areas.json';
const areasContainer = document.getElementById('areas-container');
//const gridBtn = document.getElementById('grid-view');
//const listBtn = document.getElementById('list-view');

//get and display the data
async function getAreaData() {
    const response = await fetch(areasUrl);
    const data = await response.json();
    displayAreas(data); 
}

//display data
const displayAreas = (areas) => {
  areas.forEach((area) => {
      //create card 
      const card = document.createElement('div');
      card.classList.add('area-card');

      //create elements
      const name = document.createElement('h2');
      name.textContent = area.name;

      const address = document.createElement('address');
      address.textContent = `${area.address}`;

      const description = document.createElement('p');
      description.textContent = area.description;

      const figure = document.createElement('figure');  
      const image = document.createElement('img');
      image.setAttribute('src', `images/${area.image}`);
      image.setAttribute('alt', `${area.name} Logo`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '300');
      figure.appendChild(image);


      const button = document.createElement('button');
      button.textContent = 'Learn More';


      //append everything to card
      card.appendChild(figure);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(button);

    
      areasContainer.appendChild(card);
  });
};


getAreaData();

//welcome back message 
const welcomeMessage = document.getElementById('welcome-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = new Date();
const lastVisitDate = new Date(lastVisit);
const timeDiff = currentDate - lastVisitDate;
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


if (!lastVisit) {
  welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
  //console.log("Welcome! Let us know if you have any questions.");
} 
else {

  if (daysDiff < 1) {
    welcomeMessage.textContent = "Back so soon! Awesome!";
    //console.log("Back so soon! Awesome!");
  } 
  else {
    if (daysDiff == 1) {
      welcomeMessage.textContent = `You last visited ${daysDiff} day ago.`;
    }
    else {
      welcomeMessage.textContent = `You last visited ${daysDiff} days ago.`;
      //console.log(`You last visited ${daysDiff} ${dayText} ago.`);
    }
  }
}

localStorage.setItem('lastVisit', currentDate.toISOString());


//localStorage.clear();
