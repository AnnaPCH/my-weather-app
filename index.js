
function showWeather(response) {
  let cityElement = document.querySelector("#city");
 cityElement.innerHTML = response.data.name;
  let temp = document.querySelector("#temperature");
  celsiusTemp = response.data.main.temp;
  temp.innerHTML = Math.round(celsiusTemp);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description ;
  let hum = document.querySelector("#humidity");
  hum.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#windspeed");
  wind.innerHTML = response.data.wind.speed;
  let windDegrees = document.querySelector("#wSpDeg");
  windDegrees.innerHTML = "m/s";
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 

}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
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
  function conversionF (event) {
    event.preventDefault();
    let temp = document.querySelector("#temperature");
   let fTemp= celsiusTemp * (9/5) + 32 ;
   temp.innerHTML = Math.round(fTemp);
   c.classList.remove("active");
   f.classList.add("active");
  }

function conversionC (event) {
  event.preventDefault();
let temp = document.querySelector("#temperature");
temp.innerHTML = Math.round(celsiusTemp);
f.classList.remove("active");
   c.classList.add("active");
}

function formatDate (timestamp) {
let now = new Date(timestamp);
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
let hour =now.getHours();
let minutes = now.getMinutes();
if (minutes <= 9) {
  minutes = `0${minutes}`;
}
if (hour<= 9) {
  hour = `0${hour}`;
}
let date = now.getDate();
let month = months[now.getMonth()];
let day = days[now.getDay()];
return `${day}, ${month} ${date} ${year} ${hour}:${minutes}`; 
}

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Heraklion&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric" ;
axios.get(apiUrl).then(showWeather) ;

let searchForm = document.querySelector("#search-city-form");

searchForm.addEventListener("submit", showCity);

let c = document.querySelector("#link-C");

c.addEventListener("click", conversionC);

let f = document.querySelector("#link-F");

f.addEventListener("click", conversionF);