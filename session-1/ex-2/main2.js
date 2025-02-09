/* CHALLENGE 2: Basic Arithmetic Operations
The user enters two numeric values. The program displays:
1. Their sum,
2. Their difference,
3. Their product,
4. Their division,
5. Their arithmetic mean,
6. The remainder of the division of the first number by the second,
7. The first number raised to the power of the second. */

let inputNr1 = prompt('Input the first number');
inputNr1 = Number(inputNr1);

let inputNr2 = prompt('Input the second number');
inputNr2 = Number(inputNr2);

alert('The sum of the two numbers is: ' + (inputNr1 + inputNr2));
//alert(`The sum of the two numbers is:  ${inputNr1+inputNr2}`);

alert('The difference between the two numbers is: ' + (inputNr1 - inputNr2));
//alert(`The difference between the two numbers is: ${inputNr1 - inputNr2}`);

alert('The product between the two numbers is: ' + (inputNr1 * inputNr2));
//alert(`The product between the two numbers is: ${inputNr1 * inputNr2}`);

alert('The division between the two numbers is: ' + (inputNr1 / inputNr2));
//alert(`The division between the two numbers is: ${inputNr1 / inputNr2}`);

alert('The arithmetic mean between the two numbers is: ' + (inputNr1 + inputNr2)/2);
//alert(`The arithmetic mean between the two numbers is: ${(inputNr1 + inputNr2)/2}`);

alert('The remainder of the division of the first number by the second is: ' + (inputNr1 % inputNr2));
//alert(`The remainder of the division of the first number by the second is: ${inputNr1 % inputNr2}`);

alert('The first number raised to the power of the second number is: ' + (inputNr1 ** inputNr2));
//alert(`The first number raised to the power of the second number is: ${inputNr1 ** inputNr2}`);
