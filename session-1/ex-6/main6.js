/*CHALLENGE 6: Dice Roll Simulation
The program generates and displays a random number between 1 and 6, 
simulating the roll of a six-sided die.*/

let diceSim = (Math.floor(Math.random() * 6) + 1);

alert(`The dice is showing: ${diceSim}`);