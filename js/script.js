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

let simonArray = [];

let userArray = [];

const simonRandom = document.getElementById('simonRandom');

simonNumberGenerator(1, 100);

console.log(simonArray);

setTimeout(() => {

    for (let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt(`Inserisci il numero alla posizione ${i + 1}`));
    }

}, 3000)

