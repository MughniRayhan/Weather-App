

const searchForm = document.querySelector(".search");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector(".search-button");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");


const apiKey = "0857e81c8a180e1ebc35fee07ca57b37";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const checkWeather = async(city) =>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`) ;
    const data = await response.json();

    console.log(data);

    cityName.innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp) +"°C";
    humidity.innerHTML=data.main.humidity + "%";
    windSpeed.innerHTML=data.wind.speed + "km/h";
    
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
