
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    if (index == 0) return "rock";
    if(index == 1) return "paper";
    if(index == 2) return "scissor";
    return
};



function match(player = "", computer = getComputerChoice()){


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

// const prompt = require("prompt-sync")();
let point = 0;
let draw = 0;

// function playGame(){
//     for (let i = 1; i < 6; i++){
//         let user = prompt("Enter you choice: ");
//         let result = `Round: ${i}, ${match(user, getComputerChoice())}`;
//         console.log(result);
//     }
//     if(point >= 3) console.log( `Congratulations, You win for ${point}\\5`);
//     else if(draw == 1){
//         if(point != 2) console.log( `You Loser, your'e down for ${point}\\5`);
//         else console.log("Win Win!")
//     }

// };



// Everything down here

const user = document.querySelector('.user');
const para = document.querySelector('p');


user.addEventListener('click', playRound , false);

let round = 1;
function playRound(event){

    if (event.target !== event.currentTarget){
        const clickedItem = event.target.id;
        para.textContent = `Round ${round}: ` + match(clickedItem);
        round++;
    }
};



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalButton = document.querySelector('.btn-open');
const closeModalButton = document.querySelector('.btn-close');


const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


openModalButton.addEventListener('click', openModal);


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});

