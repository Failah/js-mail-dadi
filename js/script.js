console.log('JS OK!')

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!


//VERSIONE SENZA GLI ARRAY
let diceGeneratorButton = document.getElementById('dice-generator');

// confronta i 2 volari casuali e stabilisce chi vince
diceGeneratorButton.addEventListener("click",
    function () {
        console.log('NON-ARRAY VERSION:');
        let winnerChecker = '';

        //genera numero casuale tra 1-6 per player
        let playerDice = Math.ceil(Math.random() * 6);
        console.log('player dice value:', playerDice); //stampa dado player in console
        document.getElementById('player-dice').innerHTML = playerDice; //stampa dado player nel DOM

        //genera numero casuale tra 1-6 per computer
        let computerDice = Math.ceil(Math.random() * 6);
        console.log('computer dice value:', computerDice); //stampa dado computer in console
        document.getElementById('computer-dice').innerHTML = computerDice; //stampa dado computer nel DOM

        if (playerDice > computerDice) {
            winnerChecker = 'YOU WON!: ' + playerDice + ' > ' + computerDice;
        } if (playerDice < computerDice) {
            winnerChecker = 'COMPUTER WON!: ' + playerDice + ' < ' + computerDice;
        } if (playerDice === computerDice) {
            winnerChecker = 'THAT IS A TIE!: ' + playerDice + ' = ' + computerDice;
        }
        console.log(winnerChecker); //stampa risultato in console
        console.log(''); //stampa uno spazio vuoto in console
        document.getElementById('winner-space').innerHTML = winnerChecker; //stampa risultato nel DOM
    }
)


//VERSIONE CON GLI ARRAY

let diceGeneratorButton2 = document.getElementById('dice-generator2');

const diceNumbers2 = ['1', '2', '3', '4', '5', '6'];

diceGeneratorButton2.addEventListener("click",
    function () {
        console.log('ARRAY VERSION:');
        let winnerChecker2 = '';

        //genera numero casuale tra 1-6 per player
        let playerDice2 = diceNumbers2[Math.floor(Math.random() * diceNumbers2.length)];
        console.log('player dice value:', playerDice2); //stampa dado player in console
        document.getElementById('player-dice2').innerHTML = playerDice2; //stampa dado player nel DOM

        //genera numero casuale tra 1-6 per computer
        let computerDice2 = diceNumbers2[Math.floor(Math.random() * diceNumbers2.length)];
        console.log('computer dice value:', computerDice2); //stampa dado computer in console
        document.getElementById('computer-dice2').innerHTML = computerDice2; //stampa dado computer nel DOM

        if (playerDice2 > computerDice2) {
            winnerChecker2 = 'YOU WON!: ' + playerDice2 + ' > ' + computerDice2;
        } if (playerDice2 < computerDice2) {
            winnerChecker2 = 'COMPUTER WON!: ' + playerDice2 + ' < ' + computerDice2;
        } if (playerDice2 === computerDice2) {
            winnerChecker2 = 'THAT IS A TIE!: ' + playerDice2 + ' = ' + computerDice2;
        }
        console.log(winnerChecker2); //stampa risultato in console
        console.log(''); //stampa uno spazio vuoto in console
        document.getElementById('winner-space2').innerHTML = winnerChecker2; //stampa risultato nel DOM
    }
)