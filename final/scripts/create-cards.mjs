
export const createCards = (roms, container) => {
    roms.forEach((rom) => {
        //create card 
        const card = document.createElement('section');
        card.classList.add('rom-card');

        //create elements
        const name = document.createElement('h3');
        name.textContent = rom.name;

        const author = document.createElement('p');
        author.textContent = `Author: ${rom.author}`;


        const link = document.createElement('a');
        link.href = rom.link;
        link.textContent = "Visit Site";

        const release = document.createElement('p');
        release.textContent = `Released: ${rom.release}`;

        const version = document.createElement('p');
        version.textContent = `Version: ${rom.version}`;

        const image = document.createElement('img');
        image.setAttribute('src', `images/${rom.image}`);
        image.setAttribute('alt', `${rom.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '150');

        //append everything to card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(version);
        card.appendChild(author);
        card.appendChild(release);
        card.appendChild(link);
        

        container.appendChild(card);
    });
};

