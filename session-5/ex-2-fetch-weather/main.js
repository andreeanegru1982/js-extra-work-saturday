console.log('Fetch explained!');

console.log('Before request fire');

fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=Cluj-Napoca`)
    .then(function(response){
        return response.json();
    })
    .then(function(apiData){
        //console.log('response has been parsed as a json');
        console.log(apiData.value);
    });

function displayWeather(apiData){
    console.log(apiData);
}    

// fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=Cluj-Napoca`)
//     .then(response => response.json())
//     .then(apiData => displayWeather)  
//console.log('After request fire');