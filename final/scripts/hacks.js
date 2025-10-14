import { createCards } from './create-cards.mjs';

const container = document.getElementById('rom-container');
const romsUrl = 'data/roms.json';

const diamondButton = document.querySelector('#diamond-button');
const platinumButton = document.querySelector('#platinum-button');
const heartgoldButton = document.querySelector('#heartgold-button');
const allButton = document.querySelector('#all-button');

//const platinumRoms = data.filter(data => data.version === 'Platinum');


async function getRomData(filter) {
    try {
        const response = await fetch(romsUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        container.innerHTML = '';
        if (filter == 'all') {
            createCards(data, container); 
        }
        else {
        const filteredData = data.filter(data => data.version === `${filter}`);
        createCards(filteredData, container);
        }
    } catch (error) {
        console.error('Failed to fetch rom data:', error);
    }
}


//Button event listeners
diamondButton.addEventListener('click', () => getRomData('Diamond'));
platinumButton.addEventListener('click', () => getRomData('Platinum'));
heartgoldButton.addEventListener('click', () => getRomData('Heartgold'));
allButton.addEventListener('click', () => getRomData('all'));

getRomData('all');



//welcome back message 
const welcomeMessage = document.getElementById('welcome-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = new Date();
const lastVisitDate = new Date(lastVisit);
const timeDiff = currentDate - lastVisitDate;
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


if (!lastVisit) {
  welcomeMessage.textContent = "Welcome! Check out some of our hacks below!";
  //console.log("Welcome! Let us know if you have any questions.");
} 
else {

  if (daysDiff < 1) {
    welcomeMessage.textContent = "Welcome Back! We've got just the hacks you need!";
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