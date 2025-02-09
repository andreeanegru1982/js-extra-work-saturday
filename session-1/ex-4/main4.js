/*4: Next Term in Arithmetic Progression
The user enters two numbers in an arithmetic sequence. 
The program calculates and displays the next number in the 
sequence.*/

let firstNo = prompt('Input the first number');
firstNo = Number(firstNo);

let secondNo = prompt('Input the second number');
secondNo = Number(secondNo);

// First solution:
//let nextNo = (secondNo - firstNo) + secondNo;
//alert('The next number in the progression is: ' + nextNo);


// Second solution:
//alert('The next number in the progression is:' + ((secondNo - firstNo) + secondNo));

// Third solution:
alert(`The next number in the progression is: ${secondNo - firstNo + secondNo}`)






