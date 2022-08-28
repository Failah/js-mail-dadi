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
let userScorePoints = 0;
let computerScorePoints = 0;

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
            userScorePoints = userScorePoints + 1;
            document.getElementById('user-score').innerHTML = userScorePoints; //tiene traccia delle vittorie del giocatore nel DOM
        } if (playerDice < computerDice) {
            winnerChecker = 'COMPUTER WON!: ' + playerDice + ' < ' + computerDice;
            computerScorePoints = computerScorePoints + 1;
            document.getElementById('computer-score').innerHTML = computerScorePoints; //tiene traccia delle vittorie del computer nel DOM
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
let userScorePoints2 = 0;
let computerScorePoints2 = 0;

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
            userScorePoints2 = userScorePoints2 + 1;
            document.getElementById('user-score2').innerHTML = userScorePoints2; //tiene traccia delle vittorie del giocatore nel DOM
        } if (playerDice2 < computerDice2) {
            winnerChecker2 = 'COMPUTER WON!: ' + playerDice2 + ' < ' + computerDice2;
            computerScorePoints2 = computerScorePoints2 + 1;
            document.getElementById('computer-score2').innerHTML = computerScorePoints2; //tiene traccia delle vittorie del computer nel DOM
        } if (playerDice2 === computerDice2) {
            winnerChecker2 = 'THAT IS A TIE!: ' + playerDice2 + ' = ' + computerDice2;
        }
        console.log(winnerChecker2); //stampa risultato in console
        console.log(''); //stampa uno spazio vuoto in console
        document.getElementById('winner-space2').innerHTML = winnerChecker2; //stampa risultato nel DOM
    }
)

//OPTIONS MENU POP UP

let optionsButton = document.getElementById('options-button');
let opt = 1;

optionsButton.addEventListener('click',
    function () {
        switch (opt) {
            case 1:
                document.getElementById('options-bar').style.display = "flex";
                opt = opt + 1;
                break;
            case 2:
                document.getElementById('options-bar').style.display = "none";
                opt = opt - 1;
                break;
        }
    }
)


//BACKGROUND COLOR OPTIONS

function changeColor(value) {
    let color = document.body.style.backgroundColor;
    switch (value) {
        case 'green':
            color = "#166923";
            break;
        case 'red':
            color = "red";
            break;
        case 'blue':
            color = "blue";
            break;
    }
    document.body.style.backgroundColor = color;
}


//TEXT COLOR OPTIONS

function changeText(value) {
    let textColor = document.body.style.color;
    switch (value) {
        case 'white':
            textColor = "white";
            break;
        case 'yellow':
            textColor = "yellow";
            break;
        case 'black':
            textColor = "black";
            break;
    }
    document.body.style.color = textColor;
}