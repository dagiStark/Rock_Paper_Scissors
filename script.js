
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



const modalAnnounce = document.querySelector('.modal-announce');
const modalResult = document.querySelector('.modal-result');
const queue = [""];

function finalResult(){
    if(point > 2){

        // pass
        modalAnnounce.textContent = "Congratulations. You Won!";
        modalResult.innerHTML = `${queue}`;

    }else if(point === 2){
        if (draw === 1){
            // pass
            modalAnnounce.textContent = "Draw.";
            modalResult.innerHTML = `${queue}`;


        }else if(draw === 0){
            // pass
            modalAnnounce.textContent = "You Loss.";
            modalResult.innerHTML = `${queue}`;


        }else{
            // pass
            modalAnnounce.textContent = "Congratulations. You Won!";
            modalResult.innerHTML = `${queue}`;
        }
    }else{
        modalAnnounce.textContent = "You Loss.";
        modalResult.innerHTML = `${queue}`;
    }
};



// Everything down here

const user = document.querySelector('.user');
const para = document.querySelector('p');


user.addEventListener('click', playRound , false);

let round = 1;
function playRound(event){

    if (event.target !== event.currentTarget){
        const clickedItem = event.target.id;
        para.textContent = `Round ${round}: ` + match(clickedItem);
        queue.push(`Round ${round}: ` + match(clickedItem) + "<br>");
        round++;
    }

    if (round === 6){
        finalResult();
        console.log(point, draw);
        setTimeout(openModal, 2000);
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

