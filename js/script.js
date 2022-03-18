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
            for (let i = 0; i < simonArray.length; i++) {
                simonRandom.style.display = 'block';
                let userNumber = parseInt(prompt(`Inserisci il numero alla posizione ${i + 1}`));
                while (isNaN(userNumber) || userNumber > 100) {
                    userNumber = parseInt(prompt(`Inserisci il numero alla posizione ${i + 1}`));
                }
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

function startGame(min, max, timerElapseNumber, timerPrompt) {
    simonNumberGenerator(min, max);
    userGame(timerElapseNumber, timerPrompt);
}

function cleanerString(elem1, elem2, elem3, elem4) {
    elem1.innerHTML = '';
    elem2.innerHTML = '';
    elem3.innerHTML = '';
    elem4.innerHTML = '';
}


let simonArray = [];

let userArray = [];

let userArrayWrong = [];


const simonRandom = document.getElementById('simonRandom');

const userInput = document.getElementById('userNumberOk');

const userInputWrong = document.getElementById('userNumberWrong');

let score = document.getElementById('score');

const easyBtn = document.getElementById('easy');

const mediumBtn = document.getElementById('medium');

const hardBtn = document.getElementById('hard');

const crazyBtn = document.getElementById('crazy');



easyBtn.addEventListener('click', function () {
    simonArray = [];
    userArray = [];
    userArrayWrong = [];
    cleanerString(simonRandom, userInput, userInputWrong, score);
    startGame(1, 100, 500, 30000);
})


mediumBtn.addEventListener('click', function () {
    simonArray = [];
    userArray = [];
    userArrayWrong = [];
    cleanerString(simonRandom, userInput, userInputWrong, score);
    startGame(1, 100, 500, 10000);
})


hardBtn.addEventListener('click', function () {
    simonArray = [];
    userArray = [];
    userArrayWrong = [];
    cleanerString(simonRandom, userInput, userInputWrong, score);
    startGame(1, 100, 500, 3000);
})


crazyBtn.addEventListener('click', function () {
    simonArray = [];
    userArray = [];
    userArrayWrong = [];
    cleanerString(simonRandom, userInput, userInputWrong, score);
    startGame(1, 100, 500, 1000);
})


