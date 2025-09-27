const membersUrl = 'data/members.json';
const membersContainer = document.getElementById('members-container');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

//get and display the data
async function getMemberData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembers(data); 
}

//display data
const displayMembers = (members) => {
  members.forEach((member) => {
      //create card 
      const card = document.createElement('section');
      card.classList.add('member-card');

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

    
      membersContainer.appendChild(card);
  });
};

//grid and list toggle 
gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
});


getMemberData();