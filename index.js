

const searchForm = document.querySelector(".search");
const searcBox = document.querySelector("#search-box");
const searchBtn = document.querySelector(".search-button");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");


const apiKey = "0857e81c8a180e1ebc35fee07ca57b37";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";


const checkWeather = async() =>{
    const response = await fetch(apiUrl + `&appid=${apiKey}`) ;
    const data = await response.json();

    console.log(data);

    cityName.innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp) +"°C";
    humidity.innerHTML=data.main.humidity + "%";
    windSpeed.innerHTML=data.wind.speed + "km/h";
}

checkWeather();