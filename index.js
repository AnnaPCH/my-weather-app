
function showWeather(response) {
  let cityElement = document.querySelector("h2");
 cityElement.innerHTML = response.data.name;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  let deg = document.querySelector("#degrees");
  deg.innerHTML = "°C";
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description ;
  let hum = document.querySelector("#humidity");
  hum.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#windspeed");
  wind.innerHTML = response.data.wind.speed;
  let windDegrees = document.querySelector("#wSpDeg");
  windDegrees.innerHTML = "m/s";
  let convButton = document.querySelector("#conversion-btn");
 
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("h2");
 let cityValue = document.querySelector("#city-input").value ;
  cityValue.trim();
  if(cityValue.length <= 0 ) {
   city.innerHTML = "Please enter a city";
   alert("Please enter a city");
  } else {
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
  axios.get(url).then(showWeather);
    city.innerHTML = cityValue;
  }
  }
  function checkConvButton() {
    let degrees = document.querySelector("#degrees"); 
  if (degrees.innerHTML === "°C") {
   let city = document.querySelector("#city-input");
  let cityElement = document.querySelector("h2");
  cityElement.innerHTML = city.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=imperial`;
  axios.get(url).then(showWeatherImp);
  } else {

     let city = document.querySelector("#city-input");
  let cityValue = document.querySelector("h2");
  cityValue.innerHTML = city.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
  axios.get(url).then(showWeatherMetric);
  }
  }
  function  showWeatherMetric (response) {
    let temp = document.querySelector("#temperature");
  temp.innerHTML =Math.round(response.data.main.temp);
  let deg = document.querySelector("#degrees");
  deg.innerHTML = "°C";
  let hum = document.querySelector("#humidity");
  hum.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#windspeed");
  wind.innerHTML = response.data.wind.speed;
  let windDegrees = document.querySelector("#wSpDeg");
  windDegrees.innerHTML = "m/s";
  let convButton = document.querySelector("#conversion-btn");
  convButton.innerHTML = "°C to °F";
  convButton.addEventListener("click", checkConvButton);
  }

function showWeatherImp(response) {
  
  let temp = document.querySelector("#temperature");
  temp.innerHTML =Math.round(response.data.main.temp);
  let deg = document.querySelector("#degrees");
  deg.innerHTML = "°F";
  let hum = document.querySelector("#humidity");
  hum.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#windspeed");
  wind.innerHTML = response.data.wind.speed;
  let windDegrees = document.querySelector("#wSpDeg");
  windDegrees.innerHTML = "mi/h";
  let convButton = document.querySelector("#conversion-btn");
  convButton.innerHTML = "°F to °C";
  
}

let appDate = document.querySelector("h6");

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

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
  minutes = `0${minutes}`;
}

let date = now.getDate();

let month = months[now.getMonth()];

let day = days[now.getDay()];

appDate.innerHTML = `${day}, ${month} ${date} ${year} ${hour}:${minutes}`; 

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Heraklion&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric" ;
axios.get(apiUrl).then(showWeather) ;

let convButton = document.querySelector("#conversion-btn");

convButton.addEventListener("click", checkConvButton);

let searchForm = document.querySelector("#search-city-form");

searchForm.addEventListener("submit", showCity);


