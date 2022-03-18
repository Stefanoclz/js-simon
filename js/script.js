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

function userNumberGenerator(timerElapseNumber, timerPrompt) {
    setTimeout(() => {
        simonRandom.style.display = 'none';
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                simonRandom.style.display = 'block';
                let userNumber = parseInt(prompt(`Inserisci il numero alla posizione ${i + 1}`));
                if (simonArray.includes(userNumber)) {
                    userArray.push(userNumber);
                    console.log('numeri indovinati: ' + userNumber);
                } else {
                    console.log('numeri sbagliati: ' + userNumber);
                }
            }
            userInput.innerText = userArray;
            return userArray;
        }, timerElapseNumber)

    }, timerPrompt)
}
/*
function arrayChecker() {
    
} */

let simonArray = [];

let userArray = [];

console.log(simonArray);

const simonRandom = document.getElementById('simonRandom');

const userInput = document.getElementById('userNumber');

simonNumberGenerator(1, 100);

userNumberGenerator(500, 3000);
/*
for (let i = 0; i < 5; i++) {
    let insertNumber = userArray[i]
    if (simonArray.includes(insertNumber)) {
        console.log('indovinati: ' + insertNumber);
    } else {
        console.log('sbagliati: ' + insertNumber);
    }
    /* if (winnerNumber) {
      console.log('indovinati: ' + winnerNumber);
  } else {
      console.log('sbagliati: ' + winnerNumber);
  }
} */
