
const membersUrl = 'data/members.json';
const spotlightContainer = document.getElementById('spotlight-container');


async function getSpotlightData() {
    const response = await fetch(membersUrl);
    const data = await response.json();

    // Filter out members with level 1
    const filteredMembers = data.filter(member => member.membership !== 1);

   const spotlightMembers = getRandomMembers(filteredMembers, 3);

    displaySpotlightMembers(spotlightMembers);
}

//get 3 random members
function getRandomMembers(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

//display data
const displaySpotlightMembers = (members) => {
    members.forEach((member) => {
        //create card 
        const card = document.createElement('section');
        card.classList.add('spotlight-card');

        //create elements
        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `${member.phone}`;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = member.website;

        const membership = document.createElement('p');
        const levels = ['', 'Member', 'Silver', 'Gold'];
        membership.textContent = `Membership: ${levels[member.membership]}`;

        const description = document.createElement('p');
        description.textContent = member.description;

        const image = document.createElement('img');
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `${member.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '150');

        //append everything to card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);


        spotlightContainer.appendChild(card);
    });
};

getSpotlightData();