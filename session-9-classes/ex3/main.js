console.log('Dice game- the new way implamentation of a different dice game');

class Player {
    constructor(name, avatar){
        this.name = name;
        this.avatar = avatar;
        this.score = 0
    }

    move(){
        const diceRoll = Math.floor(Math.random() * 6)+1;
        console.log(`${this.avatar}:${this.name} rolls ${diceRoll}`);
        this.score += diceRoll;
        console.log(`${this.avatar}:${this.name}'s current score is ${this.score}`);
    }
}

const gameRounds = 10;

const p1 =  new Player('Petrica', '🍌');
const p2 = new Player('Maricica', '🎉');

for(let i = 1; i <= gameRounds; i++){
    console.log('');
    console.log(`====ROUNDS ${i} STARTS====`);
    
    const chosenPlayer = Math.random() > 0.5 ? p1 : p2;
    console.log(`${chosenPlayer.avatar}: ${chosenPlayer.name} will be the player to roll dice this round`);
    chosenPlayer.move();
//acelasi lucru mai pe larg explicat
    // let chosenPlayer = null;
    // if(Math.random() > 0.5){
    //     chosenPlayer = p1;
    // }
    // else{
    //     chosenPlayer = p2;
    // }
    // chosenPlayer.move();

}    
   
    

 

    



