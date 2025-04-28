console.log('Dice game- the old way implamentation');

const gameRounds = 6;

function playerFactory(name, avatar){
    return {
        name,
        avatar,
        score: 0
    }
}

function movePlayer(p){
    console.log('');
    const diceRoll = Math.floor(Math.random() * 6)+1;
    console.log(`${p.avatar}:${p.name} rolls ${diceRoll}`);
    p.score += diceRoll;
    console.log(`${p.avatar}:${p.name} current score is ${p.score}`);
}

const p1 =  playerFactory('Petrica', '🍌');
const p2 = playerFactory('Maricica', '🎉')

for(let i = 1; i <= gameRounds; i++){
    console.log('');
    console.log(`====ROUNDS ${i} STARTS====`);
    
    //player 1
    movePlayer(p1)
   
    //player 2
    movePlayer(p2)
}


