console.log('Survivor Game');

const playerName = prompt(`Input a player's name:`);
let huntingSkill = Number(prompt(`Input the player's hunting skill (0 to 10)`));
const survivalDays = 100;
let daysCount = 1;
let hitPoints = 100;

while(daysCount <= survivalDays){
    console.log('');
    console.log(`Day ${daysCount} starts!`);


    let diceRoll = Math.floor(Math.random() * 10) + 1;
    console.log(`${playerName} (hunting skill: ${huntingSkill}) goes hunting and rolls a ${diceRoll}`);


    if (diceRoll <= huntingSkill){
        console.log(`${playerName} Finds Food!🍖 `);
        hitPoints += 10;
        console.log(`${playerName} has gained 10 points.The current count is ${hitPoints}`);
        
    }
    else{
        console.log(`${playerName} Is starving...😵‍💫`);
        hitPoints -= 10;
        console.log(`${playerName} has lost 10 points. The current count is ${hitPoints}`);
        
    }

    if (hitPoints <= 30 && !skillReduced) {
        if (huntingSkill > 0) {
            huntingSkill -= 1;
            skillReduced = true;
            console.log(`You haven't eaten well for a while, your hunting skill goes down to ${huntingSkill}.`);
        }
    } else if (hitPoints > 50) {
        skillReduced = false; // Reset the flag if health improves
    }

    if(hitPoints <= 0){
        console.log(`My friend ${playerName}, you've lost all your points...You are dead!🩻`)
        break;
    }

    daysCount++;
      
}

if(hitPoints > 0){
    console.log(`Congratulation, ${playerName} you've survived the challenge and gained ${hitPoints} points.🎉`)
}
