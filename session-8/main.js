console.log('Practice arrays and functions.');

const players = [];

function playerFactory(name, location){
    return{
        name,
        location: location,
        score: 0
    }
}

//const playerFactory = (name, location) => ({name,location: location,score: 0})

players.push(playerFactory('Eduard', 'B'));
players.push(playerFactory('Andreea', 'CJ'));
players.push(playerFactory('Ionuț', 'BN'));
players.push(playerFactory('Elena', 'B'));
players.push(playerFactory('Anca', 'CJ'));
players.push(playerFactory('Adi', 'BV'));

console.log(players);

function shuffel1(maxInterChanges = 100){
    //set random number of interchanges
    const interChanges = Math.floor(Math.random() *maxInterChanges);
    console.log(`Interchanges ${interChanges}`);

    // pick 2 random elements of the array and interchange then a random number of times
    for(let i=0; i< interChanges; i++){
        const randomIndex1 = Math.floor(Math.random() * players.length);
        const randomIndex2 = Math.floor(Math.random() * players.length);
        console.log(`Should interchange ${randomIndex1} with ${randomIndex2}`);

        // do the interchange old way===paharele
        const aux = players[randomIndex1];
        players[randomIndex1] = players[randomIndex2];
        players[randomIndex2] = aux;
    }
}

function shuffel(array){
    return array.sort((a, b) => Math.random() - 0.5);
}
document.querySelector('#shuffel-btn').addEventListener('click', () =>{
    const dispayPlayers = document.querySelector('#display-players');

    dispayPlayers.innerHTML = '';
    shuffel(players).forEach(player => {
        const playerContainer = document.createElement('div');
        playerContainer.classList.add('#player-container');
        playerContainer.textContent = player.name;
        dispayPlayers.append(playerContainer);
    });
})













