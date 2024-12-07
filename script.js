let userScore = 0;
let compScore = 0;


function getComputerChoice(){
    let n = Math.random();

    if(n < 0.33){
        return "Rock";
    }
    else if(n > 0.33 && n < 0.66){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    console.log("Enter your choice:\nRock\nPaper\nScissors\n");
    let userChoice = prompt("choice: ");
    userChoice = userChoice.toUpperCase();

    if(userChoice == "ROCK"){
        return "Rock";
    }
    else if(userChoice == "PAPER"){
        return "Paper";
    }
    else if(userChoice == "SCISSORS" || userChoice =="SCISSOR"){
        return "Scissors";
    }
    else{
        console.log("Invalid Choice! Try again!");
        return getHumanChoice();
    }
}





function playRound(compChoice, userChoice){

    if(compChoice == "Rock" && userChoice=="Paper"){
        console.log("YOU WIN! %s beats %s", userChoice, compChoice);
        userScore++;
    }
    else if(compChoice == "Paper" && userChoice=="Scissors"){
        console.log("YOU WIN! %s beats %s", userChoice, compChoice);
        userScore++;
    }
    else if(compChoice=="Scissors" && userChoice=="Rock"){
        console.log("YOU WIN! %s beats %s", userChoice, compChoice);
        userScore++;
    }
    else if(compChoice == "Paper" && userChoice=="Rock"){
        console.log("YOU LOSE! %s beats %s", compChoice, userChoice);
        compScore++;
    }
    else if(compChoice == "Scissors" && userChoice=="Paper"){
        console.log("YOU LOSE! %s beats %s", compChoice, userChoice);
        compScore++;
    }
    else if(compChoice == "Rock" && userChoice=="Scissors"){
        console.log("YOU LOSE! %s beats %s", compChoice, userChoice);
        compScore++;
    }
    else if(compChoice == userChoice)
    {
        console.log("TIE! both chose %s", userChoice);
    } 
}


function playGame(){
    let roundNo = 0;

        console.log("Round %d:", roundNo+1);

        let userChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        console.log("Computer chose: %s", compChoice);

        playRound(compChoice, userChoice);
        console.log("User score: %d", userScore);
        console.log("Computer score: %d", compScore);

        roundNo++;

    if(userScore > compScore){
        console.log("Congratulations! You Win!");
    }
    else if(compScore > userScore)
    {
        console.log("You Lose! Better luck next time.");
    }
    else{
        console.log("TIE!");
    }

}

playGame();


