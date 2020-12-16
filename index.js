function showWeather(response) {
let temp = document.querySelector("#temperature");
temp.innerHTML = response.data.main.temp ;
let hum = document.querySelector("#humidity");
hum.innerHTML = response.data.main.humidity ;
let wind = document.querySelector("#windspeed");
wind.innerHTML = response.data.wind.speed ;
let windDegrees = document.querySelector("#wSpDeg");
windDegrees.innerHTML = "meters/second" ;
}
function showCity(event) {
event.preventDefault();
let city = document.querySelector("#city-input");
let cityValue = document.querySelector("h1");
cityValue.innerHTML = city.value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
axios.get(url).then(showWeather);
}

function showWeatherImp (response) {
  let temp = document.querySelector("#temperature");
temp.innerHTML = response.data.main.temp ;
let deg = document.querySelector("#degrees");
deg.innerHTML = "°F";
let hum = document.querySelector("#humidity");
hum.innerHTML = response.data.main.humidity ;
let wind = document.querySelector("#windspeed");
wind.innerHTML = response.data.wind.speed ;
let windDegrees = document.querySelector("#wSpDeg");
windDegrees.innerHTML = "miles/hour" ;
let convButton = document.querySelector("#conversion-btn");
convButton.innerHTML = "°F to °C" ;
}

function convertDegrees () {
let city = document.querySelector("#city-input");
let cityValue = document.querySelector("h1");
cityValue.innerHTML = city.value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=imperial`;
axios.get(url).then(showWeatherImp);


}

let appDate = document.querySelector("h6");

let now = new Date(); 

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let months = [
  "January", 
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
"September",
"October",
"November",
"December"
];

let year = now.getFullYear();

let hour = now.getHours();

let minutes = now.getMinutes();

if (minutes <= 9) {
  minutes = `0${minutes}`
}

let date = now.getDate();

let month = months[now.getMonth()];

let day = days[now.getDay()];
console.log(appDate);
appDate.innerHTML = `${day}, ${month} ${date} ${year} ${hour}:${minutes}`;

let searchForm = document.querySelector("#search-city-form");

searchForm.addEventListener("submit", showCity);

let convButton = document.querySelector("#conversion-btn");

convButton.addEventListener("click", convertDegrees);