console.log('Fetch explained!');

console.log('Before request fire');

fetch('https://api.chucknorris.io/jokes/random')
    .then(function(response){
        console.log('responce received!');
        console.log(response);

        return response.json();
    })
    .then(function(apiData){
        console.log('response has been parsed as a json');

        console.log(apiData.value);
    });

console.log('After request fire');