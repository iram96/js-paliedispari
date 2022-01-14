/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const userWord = prompt('inserisci una parola').trim();

function palindromeCheck(word){
    let isPalindrome;
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reverseWord += word.charAt(i);
    }
    if (reverseWord === word){
        isPalindrome = true;
        return isPalindrome;
    } else {
        isPalindrome = false;
        return isPalindrome;
    }

}

palindromeCheck(userWord);

console.log('Palindrome word: ' + palindromeCheck(userWord));