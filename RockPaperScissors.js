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
    let playerPickInitial = prompt("PICK: rock, paper or scissors");
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
        console.log("empate");
        return 'tie';
    }
    //Considero cuando gana el jugador
    if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
        console.log('You win, rock beat scissors');
        return 'win';
    }
    if ((playerSelection === 'paper') && (computerSelection === 'rock')){
        console.log('You win, paper beat rock');
        return 'win';
    }
    if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
        console.log('You win, scissors beat paper');
        return 'win';
    }
    //Considero cuando gana la maquina
    if (computerSelection === 'rock'){
        console.log('You lose, rock beat scissors');
        return 'lose';
    }
    if (computerSelection === 'paper'){
        console.log('You lose, paper beat rock');
        return 'lose';
    }
    if (computerSelection === 'scissors'){
        console.log('You lose, scissors beat paper');
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
    if (winCounter >= 3){
        console.log(`You winned ${winCounter}/5 rounds, YOU WINNED!`);
        return `You winned ${winCounter}/5 rounds, YOU WINNED!`
    }
    console.log(`You winned ${winCounter}/5 rounds, YOU LOSE.!`);
    return `You winned ${winCounter}/5 rounds, YOU LOSE!`;
}

//Ejecuto la función que contiene a todas las demas.
game();


