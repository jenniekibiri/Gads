//variables
const dotenv=require('dotenv').config()
let temperature = document.getElementById('temperature')
let rainDesc = document.getElementById('rainDescription')
const icon = document.querySelector(".weather-icon")
//call the apis and remember to add your api keys
  const proxy ="https://cors-anywhere.herokuapp.com/";
const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=Nyeri&appid=2a8705842347be34e28960ed24c50698`
fetch(api)
           .then(response=>{
               //the console will tell you the status of call
               console.log(response)
               return response.json()
               
           }).then(data=>{
               //the data returned by the call you made 
               console.log(data)
               const temp=data.main.temp
               //convert the kelvin to celcius
               let celcius = Math.round((temp-273.15)*10)/10
                temperature.innerHTML= ` <h4 class="text-white">${celcius}&#176;</h4>`
               


               rainDesc.textContent=data.weather[0].description
                icon.innerHTML = `<img  height='180px' width='200px' alt='weather icon' src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`;
           })
          