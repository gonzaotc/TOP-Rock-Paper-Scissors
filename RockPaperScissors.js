let replayGame = false;
do{

function computerPlay(){
    // Genero número aleatorio entre 1.001 y 3.99 -> lo flooreo a 1->3
    let computerPick = Math.floor(Math.random()*3 + 1);
    switch (computerPick){
        case 1: {
            computerPick = 'rock';
            break;
        }
        case 2: {
            computerPick = 'paper';
            break;
        }
        case 3: {
            computerPick = 'scissors';
            break;
        }
    } 
    console.log(`computer picks: ${computerPick}`);
    return computerPick;
}

function playerPlay(){
    let playerPickInitial = prompt("LOKI: Ok, pick one: rock, paper or scissors");
    playerPick = playerPickInitial.toLowerCase();
    console.log(`player picks: ${playerPick}`);
    //Verifico que el usuario entre una opcion correcta.
    while ((playerPick !== 'rock') && (playerPick !== 'paper') && (playerPick !== 'scissors')){
    playerPickInitial = prompt("ERROR. Enter a valid option: 'rock', 'paper' or 'scissors'");
    playerPick = playerPickInitial.toLowerCase();
    console.log(`player picks: ${playerPick}`);
    }
    return playerPick;
}


//Funcion que determine el ganador de la ronda
function playRound(playerSelection, computerSelecion){

    //Primero considero el empate.
    if (playerSelection === computerSelection){
        console.log("tie");
        alert(`LOKI: ${computerSelection}! ...it's a tie..`);
        return 'tie';
    }
    //Considero cuando gana el jugador
    if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
        console.log('You win, rock beats scissors');
        alert(`LOKI: ${computerSelection}! ...ok, rock beats scissors, you win this time..`);
        return 'win';
    }
    if ((playerSelection === 'paper') && (computerSelection === 'rock')){
        console.log('You win, paper beats rock');
        alert(`LOKI: ${computerSelection}! ...ok, paper beats rock, you win this time..`);
        return 'win';
    }
    if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
        console.log('You win, scissors beats paper');
        alert(`LOKI: ${computerSelection}! ...ok, scissors beats paper, you win this time..`);
        return 'win';
    }
    //Considero cuando gana la maquina
    if (computerSelection === 'rock'){
        console.log('You lose, rock beats scissors');
        alert(`LOKI: ${computerSelection}! HAHA!, rock beats scissor, you can do nothing against me.`);
        return 'lose';
    }
    if (computerSelection === 'paper'){
        console.log('You lose, paper beats rock');
        alert(`LOKI: ${computerSelection}! HAHA!, paper beats rock, you can do nothing against me.`);
        return 'lose';
    }
    if (computerSelection === 'scissors'){
        console.log('You lose, scissors beats paper');
        alert(`LOKI: ${computerSelection}! HAHA!, scissors beats paper, you can do nothing against me.`);
        return 'lose';
    }
}

//Funcion que determine el ganador del juego completo.
function game(){
    let winCounter = 0;
    // Ejecuto las rondas
    for (let i = 0; i < 5;){
        //Ejecuto las funciones para obtener los valores player y computer
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        let ronda = playRound(playerSelection, computerSelection);
        //Aumento la i solamente si no es empate. 
        if (ronda === 'win'){
            winCounter++;
            i++;
        }
        else if (ronda ==='lose'){
            i++;
        }
    }

    //Una vez que se jugaron las 5 rondas CON RESULTADO, determino el ganador.
    if (winCounter===5){
        console.log('LOKI: OMG! How it can be???? I lost all rounds against you :(, you are amazing, mortal.');
        return 'LOKI: OMG! How it can be???? I lost all rounds against you :(, you are amazing, mortal.';
    }
    if (winCounter===0){
        console.log(`LOKI: HAHAH. YOU LOST ALL ROUNDS!, go home kid!`);
        return `LOKI: HAHAH. YOU LOST ALL ROUNDS!, go home kid!`;
    }
    if (winCounter >= 3){
        console.log(`LOKI: You won ${winCounter}/5 rounds, well... you win`);
        return `LOKI: You won ${winCounter}/5 rounds, well... you win`
    }
    console.log(`LOKI: You winned ${winCounter}/5 rounds, you lost against me. HAHAH!`);
    return `LOKI: You won ${winCounter}/5 rounds, you lost against me. HAHAH! `;
}

//Ejecuto la función que contiene a todas las demas.
let letsPlay = prompt("LOKI:   So.. you wanna play rock paper scissors? with me, the god of mischief?.");
if (letsPlay !== 'no'){
    alert("... good luck kid, you will need it.. lets go for the best of five.");
    alert(game());

    replayGame = prompt("LOKI: Do you wanna play again.. kid?. enter 'yes' to try again.");
    if (replayGame === 'yes'){
        replayGame = true;
    }
}

}while (replayGame === true)

