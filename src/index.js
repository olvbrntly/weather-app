console.log('hi');


let latitude = 34.05;
let longitude = -118.24;
let cityName = 'los angeles'
let limit = 1;
async function getForcast(){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=47d07c43f6e4181dbf36a31437ebe789&units=imperial`)
    let weatherForcast = await response.json();
    console.log(weatherForcast);
}

getForcast();


