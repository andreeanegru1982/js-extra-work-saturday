/* CHALLENGE 5: Currency Conversion
The user enters an amount in one currency and an exchange rate. 
The program calculates and displays the converted amount.*/

console.log('main5.js');

let amount = prompt('Input the amount you need to exchange');
amount = Number(amount);

let exchangeRate = prompt('Input the exchange rate');
exchangeRate = Number(exchangeRate);

alert(`The converted amount is: ${amount*exchangeRate}`);
