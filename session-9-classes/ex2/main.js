console.log('Dice game- the old way implamentation');

// class Player {
//     constructor(name, avatar){
//         this.name = name;
//         this.avatar = avatar;
//         this.score = 0
//     }

//     move(){
//         const diceRoll = Math.floor(Math.random() * 6)+1;
//         console.log(`${this.avatar}:${this.name} rolls ${diceRoll}`);
//         this.score += diceRoll;
//         console.log(`${this.avatar}:${this.name}'s current score is ${this.score}`);
//     }
// }

const gameRounds = 6;

const p1 =  new Player('Petrica', '🍌');
const p2 = new Player('Maricica', '🎉');

for(let i = 1; i <= gameRounds; i++){
    console.log('');
    console.log(`====ROUNDS ${i} STARTS====`);
    
    //player 1
    console.log(`${p1.avatar}: ${p1.name} turn to roll the dice`);
    p1.move();
   
    //player 2
    console.log(`${p2.avatar}: ${p2.name} turn to roll the dice`);
    p2.move();
}


