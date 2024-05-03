const apiKey ="b9c0c059747da78273fdaabca3b13f30";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function  checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
  
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  } else{
    var data = await response.json();

    console.log(data);



document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather[0].main == "Clouds"){
        weatherIcon.src ="clouds.svg";
}

else if (data.weather[0].main =="Sun"){
        weatherIcon.src ="sun.svg";
}
else if (data.weather[0].main =="Rain"){
        weatherIcon.src ="rain.svg";
  }
else if (data.weather[0].main =="Drizzle"){
        weatherIcon.src ="drizzle.svg";
  }

  else if (data.weather[0].main =="Mist"){
       weatherIcon.src ="mist.svg";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display="none";

}

  }
  
  
searchBtn.addEventListener("click",()=>{
   
    checkWeather(searchBox.value); 
    
})

