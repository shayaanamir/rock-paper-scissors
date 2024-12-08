let userScore = 0;
let compScore = 0;
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerDisplay = document.querySelector("#Player > img");
const compDisplay = document.querySelector("#Computer > img");

const playerText = document.querySelector("#Player > h2");
const compText = document.querySelector("#Computer > h2");

const score = document.querySelector("#score");
const result = document.querySelector("#result");


rockButton.addEventListener("click", () =>{
    playerDisplay.src = "images/rock.png";
    blinkImage(playerDisplay);
    playGame("Rock");
});

paperButton.addEventListener("click", () =>{
    playerDisplay.src = "images/paper.png";
    blinkImage(playerDisplay);
    
    playGame("Paper");
});

scissorsButton.addEventListener("click", ()=>{
    playerDisplay.src = "images/scissors.png";
    blinkImage(playerDisplay);
    playGame("Scissors");
});

function blinkImage(imageSrc){
    imageSrc.setAttribute("style", "filter: brightness(70%)");
    setTimeout(() =>{
        imageSrc.setAttribute("style", "filter: brightness(100%)");
    }, 150);
}

function blinkText(text, colorValue){
    text.style.color = colorValue;
    setTimeout(() =>{
            text.style.color = "aliceblue";
    }, 1000);
    
}

function getComputerChoice(){
    let n = Math.random();

    if(n < 0.33){  
        compDisplay.src = "images/rock.png";
        blinkImage(compDisplay);
        return "Rock";
    }
    else if(n > 0.33 && n < 0.66){
        compDisplay.src = "images/paper.png";
        blinkImage(compDisplay);
        return "Paper";
    }
    else{
        compDisplay.src = "images/scissors.png";
        blinkImage(compDisplay);
        return "Scissors";
    }
}




function playRound(compChoice, userChoice){

    if(compChoice == "Rock" && userChoice=="Paper"){
        result.textContent = "YOU WIN!";
        blinkText(playerText, "lightgreen");
        blinkText(compText, "red");
        userScore++;
    }
    else if(compChoice == "Paper" && userChoice=="Scissors"){
        result.textContent = "YOU WIN!";
        blinkText(playerText, "lightgreen");
        blinkText(compText, "red");
        userScore++;
    }
    else if(compChoice=="Scissors" && userChoice=="Rock"){
        result.textContent = "YOU WIN!"; 
        blinkText(playerText, "lightgreen");
        blinkText(compText, "red");
        userScore++;
    }
    else if(compChoice == "Paper" && userChoice=="Rock"){
        result.textContent = "YOU LOSE!";
        blinkText(compText, "lightgreen");
        blinkText(playerText, "red");
        compScore++;
    }
    else if(compChoice == "Scissors" && userChoice=="Paper"){
        result.textContent = "YOU LOSE!";
        blinkText(compText, "lightgreen");
        blinkText(playerText, "red");
        compScore++;
    }
    else if(compChoice == "Rock" && userChoice=="Scissors"){
        result.textContent = "YOU LOSE!";
        blinkText(compText, "lightgreen");
        blinkText(playerText, "red");
        compScore++;
    }
    else if(compChoice == userChoice)
    {
        result.textContent = "TIE!";
    }

    
}


function playGame(userChoice){

    let compChoice = getComputerChoice();
    playRound(compChoice, userChoice);
    score.textContent = userScore + " : " + compScore ;

    if(userScore >=5 || compScore >= 5){
        if(userScore > compScore){
            result.textContent = "CONGRATULATIONS! YOU WIN!";
            result.style.color = "lightgreen";
        }
        else{
            result.textContent = "YOU LOSE! BETTER LUCK NEXT TIME!";
            result.style.color = "red";
        }

        userScore = 0;
        compScore = 0;
        return;
    }
    result.style.color = "aliceblue";
}




