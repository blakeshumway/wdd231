// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const tomorrowTemp = document.querySelector('#tomorrow-temp');

const day2Temp = document.querySelector('#day-2-temp');
const day3Temp = document.querySelector('#day-3-temp');

const day2Date = document.querySelector('#day-2-date');
const day3Date = document.querySelector('#day-3-date');


//date object
const currentDate = new Date();

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "d1cf420adef885c04bca76d0bc665918"
const myLat = "35.47520117396394"
const myLong = "-97.53391067574114"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('SRC', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

//displays forecast
function displayForecast(data) {

  tomorrowTemp.innerHTML = `${data.list[1].main.temp}&deg;F`;

  day2Temp.innerHTML = `${data.list[8].main.temp}&deg;F`;
  date.setDate(date.getDate() + 2); 
  day2Date.innerHTML = `${date.toLocaleDateString('en-US', { weekday: 'long' })}: `;
  date.setDate(date.getDate() + 1); 
  day3Temp.innerHTML = `${data.list[16].main.temp}&deg;F`;
  
  day3Date.innerHTML = `${date.toLocaleDateString('en-US', { weekday: 'long' })}: `;

}

//FETCH
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }


}

apiFetch();