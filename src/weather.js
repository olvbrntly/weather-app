export async function getForcast(cityName){
    //takes location name, converts to coordinates, passes to get location info
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}}&limit5&appid=47d07c43f6e4181dbf36a31437ebe789`);
    let locationInfo = await response.json();
    getLocationInfo(locationInfo[0].lat,locationInfo[0].lon);
}

async function getLocationInfo(lat, lon){
    //uses coordinates to find location and get temp info
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=47d07c43f6e4181dbf36a31437ebe789&units=imperial`)
    let weatherForcast = await response.json();
    console.log(weatherForcast);
}



