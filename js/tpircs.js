/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

let userWord = '';
const enterButton = document.getElementById('create');

enterButton.addEventListener( 'click', function () {
    userWord = document.getElementById('parola-utente').value;
    console.log(userWord);

    palindromeCheck(userWord);
    console.log(palindromeCheck(userWord))
    
    console.log('Palindrome word: ' + palindromeCheck(userWord));
    if (palindromeCheck(userWord) === true){
        document.getElementById('palindrome-result').innerText = `La Parola ${userWord} è palindroma!`;
    } else {
        document.getElementById('palindrome-result').innerText = `La Parola ${userWord} NON è palindroma!`;
    }

})




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