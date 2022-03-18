console.log('JS OK');

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function randomNumberGenerator(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range) + min;
}

function simonNumberGenerator(min, max) {
    for (let i = 0; i < 5; i++) {
        let simonNumber = randomNumberGenerator(min, max);
        simonArray.push(simonNumber);
        simonRandom.innerText = simonArray;
    }


}

function userGame(timerElapseNumber, timerPrompt) {
    setTimeout(() => {
        simonRandom.style.display = 'none';
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                simonRandom.style.display = 'block';
                let userNumber = parseInt(prompt(`Inserisci il numero alla posizione ${i + 1}`));
                if (simonArray.includes(userNumber)) {
                    userArray.push(userNumber);
                    console.log('numeri indovinati: ' + userNumber);
                    let points = userArray.length;
                    score.innerText = `Il tuo punteggio: ${points}`;
                } else {
                    userArrayWrong.push(userNumber);
                    console.log('numeri sbagliati: ' + userNumber);
                }
            }
            userInput.innerText = `I numeri indovinati sono: ${userArray}`;
            userInputWrong.innerText = `I numeri sbagliati sono: ${userArrayWrong}`;
            return userArray;
        }, timerElapseNumber)
    }, timerPrompt)
}
/*
function arrayChecker() {
    
} */

let simonArray = [];

let userArray = [];

let userArrayWrong = [];

console.log(simonArray);

const simonRandom = document.getElementById('simonRandom');

const userInput = document.getElementById('userNumberOk');

const userInputWrong = document.getElementById('userNumberWrong');

let score = document.getElementById('score');

simonNumberGenerator(1, 100);

userGame(500, 3000);

