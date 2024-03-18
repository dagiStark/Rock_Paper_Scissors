
function getComputerChoise(){
    let index = Math.floor(Math.random() * 3);
    if (index == 0) return "Rock";
    if(index == 1) return "Paper";
    if(index == 2) return "Scissor";
    return
};



function match(playerSelection = "", computerSelection=""){

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // if((player != "rock") || (player != "paper") ||( player != "scissor")) return "please select: Rock, Paper or Scissor";

    if(player == "scissor"){
        if (computer == "rock") return "You Lose!, Rock beats Scissor.";
        else if(computer == "sissor") return "Draw."; 
        else return "You win!, Scissor beats Paper";
    } 

    if(player == "rock"){
        if (computer == "paper") return "You Lose!, Paper beats Rock.";
        else if(computer == "rock") return "Draw."; 
        else return "You win!, Rock beats Scissor";
    } 

    if(player == "paper"){
        if (computer == "scissor") return "You Lose!, Scissor beats Paper.";
        else if(computer == "paper") return "Draw."; 
        else return "You win!, Paper beats Rock";
    } 

    return
}

 