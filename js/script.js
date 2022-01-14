/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
console.log('JS ok');

// ! Validazione Pari o Dispari
    
let userPick;
let isEven = false;

while (isEven === false){
    userPick = prompt(`Scegli pari o dispari`).trim();
    if (userPick === 'pari'){
        isEven = true;
        break;
    } else if (userPick === 'dispari'){
        isEven = true;
        break;
    }
    
}

console.log(userPick);   


//! Validazione Numeri
let userNumber;

while (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
    
}
console.log(userNumber);

// ! Generiamo numero pc
function randomNumber(numberMin, numberMax){
    let computedValue = 0;
    computedValue = Math.floor(Math.random() * numberMax) + numberMin;
    return computedValue;
}
let computerNumber = randomNumber(1, 5);

console.log(computerNumber);

// ! Somma dei Numeri
let sum = 0;

sum = computerNumber + userNumber;
console.log(sum);


let sumResult = 'dispari';

if (!(sum % 2)){
    sumResult = 'pari';
}

console.log(sumResult);

// ! Controllo vincitore
if (sumResult === userPick){
    console.log('You Won!');
} else {
    console.log('Better Luck next time!')
}