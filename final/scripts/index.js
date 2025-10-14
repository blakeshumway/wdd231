import { createCards } from './create-cards.mjs';

const container = document.getElementById('spotlight-container');

const romsUrl = 'data/roms.json';


async function getSpotlightData() {
    try {
        const response = await fetch(romsUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Shuffle the array and pick the first 4 items
        const shuffled = data.sort(() => 0.5 - Math.random());
        const fourRandom = shuffled.slice(0, 4);

        createCards(fourRandom, container); 

        //createCards(data, container); 
    } catch (error) {
        console.error('Failed to fetch spotlight data:', error);
    }
}

getSpotlightData();