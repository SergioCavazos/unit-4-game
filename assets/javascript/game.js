// Declaración de variables
var randomNumber = 0; //Valor aleatorio que elige la computadora
var crystalNumberOne = 0; // Valor aleatorio del cristal 1
var crystalNumberTwo = 0; // Valor aleatorio del cristal 2
var crystalNumberThree = 0; // Valor aleatorio del cristal 3
var crystalNumberFour = 0; // Valor aleatorio del cristal 4
var totalScore = 0; // Valor que va sumando las selecciones del cristal
var win = 0; // Juegos ganados
var losses = 0; // Juegos perdidos
var bandera = false;

// Generando el número aleatorio entre un min y un max
function randomNumFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

// Esta función va a volver a asignar numeros cuando el jugador gane o pierda
function resetNumbers() {
    // Reseteo de la sumatoria acumulada
    totalScore = 0;

    // Numero aleatorio de la computadora
    randomNumber = randomNumFromInterval(19,120);

    // Mando el randomNumber al Html
    $("#numToScore").text(randomNumber);

    // Número aleatorio para los cristales entre 1 y 12
    crystalNumberOne = randomNumFromInterval(1,12);
    crystalNumberTwo = randomNumFromInterval(1,12);
    crystalNumberThree = randomNumFromInterval(1,12);
    crystalNumberFour = randomNumFromInterval(1,12);

   // bandera = true;
};

// Agrego y comparo
function addAndCompareOne() {
   
    totalScore = totalScore+crystalNumberOne;

    $("#totalSum").text(totalScore);

    if (totalScore === randomNumber) {
        winner(); // se manda a la función de winner
    }
    else if (totalScore > randomNumber) {
        losser(); // se manda a la función de losser
    }

};

function addAndCompareTwo() {
    
    totalScore = totalScore+crystalNumberTwo;
   
    $("#totalSum").text(totalScore);

    if (totalScore === randomNumber) {
        winner(); // se manda a la función de winner
    }
    else if (totalScore > randomNumber) {
        losser(); // se manda a la función de losser
    }
 
};

function addAndCompareThree() {
   
    totalScore = totalScore+crystalNumberThree;

    $("#totalSum").text(totalScore);

    if (totalScore === randomNumber) {
        winner(); // se manda a la función de winner
    }
    else if (totalScore > randomNumber) {
        losser(); // se manda a la función de losser
    }

};

function addAndCompareFour() {
   
    totalScore = totalScore+crystalNumberFour;

    $("#totalSum").text(totalScore);
    if (totalScore === randomNumber) {
        winner(); // se manda a la función de winner
    }
    else if (totalScore > randomNumber) {
        losser(); // se manda a la función de losser
    }

};

// Función que se ejecuta cuando gano
function winner() {
 win++;
 resetNumbers();
 $("#winsScore").text(win);
 $("#totalSum").text("");
};

// Función que se ejecuta cuando pierdo
function losser() {
losses++
resetNumbers();
$("#lossesScore").text(losses);
$("#totalSum").text("");
};

$(document).ready(() => {
    // Espero y capturo los clicks del jugador
    $( "#crystalOne" ).on("click", addAndCompareOne);
    $( "#crystalTwo" ).on("click", addAndCompareTwo);
    $( "#crystalThree" ).on("click", addAndCompareThree);
    $( "#crystalFour" ).on("click", addAndCompareFour);
    
    resetNumbers();
});