
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    if (index == 0) return "Rock";
    if(index == 1) return "Paper";
    if(index == 2) return "Scissor";
    return
};



function match(playerSelection = "", computerSelection=""){

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();


    if(player == "scissor"){
        if (computer == "rock") return "Rock beats Scissor.";
        else if(computer == "scissor"){
            draw++; 
            return "Draw."; }
        else{
            point++;
            return "Scissor beats Paper." ;
        }
    } 

    if(player == "rock"){
        if (computer == "paper") return "Paper beats Rock.";
        else if(computer == "rock"){
            draw++ ;
            return "Draw.";} 
        else{
            point++;
            return "Rock beats Scissor." ;
        }
    } 

    if(player == "paper"){
        if (computer == "scissor") return "Scissor beats Paper.";
        else if(computer == "paper"){
            draw++;
            return "Draw."; }
        else{
            point++;
            return "Paper beats Rock" ;
        }
    } 

    return
}

const prompt = require("prompt-sync")();
let point = 0;
let draw = 0;

function playGame(){
    for (let i = 1; i < 6; i++){
        let user = prompt("Enter you choice: ");
        let result = `Round: ${i}, ${match(user, getComputerChoice())}`;
        console.log(result);
    }
    if(point >= 3) console.log( `Congratulations, You win for ${point}\\5`);
    else if(draw == 1){
        if(point != 2) console.log( `You Loser, your'e down for ${point}\\5`);
        else console.log("Win Win!")
    }

}





playGame()