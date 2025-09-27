document.addEventListener('DOMContentLoaded', function () {
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//toggle show class off and on

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});
});

//get current date
const date = new Date();
//get the year
const year = date.getFullYear();

//store last date modification
const lastModifiedDate = document.lastModified;

document.getElementById("currentYear").innerHTML = ` ${year}`;
document.getElementById("lastModified").innerHTML = `Last Modified ${lastModifiedDate}`;