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