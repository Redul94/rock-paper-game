const score = {
    player: 0,
    computer: 0,
    ties:0,
  };
  document.querySelector('.score').innerHTML= `Player: ${score.player} Computer: ${score.computer} Ties: ${score.ties}`;
  const scoreString = JSON.parse(localStorage.getItem("score"));
  function playGame(playerMove) {
    const computerChoice = computerPlay();
    

    let result = "";
    if (playerMove === `scissors`) {
      if (computerChoice === `rock`) {
        result = "You lose!";
      } else if (computerChoice === "paper") {
        result = "You win!";
      } else if (computerChoice === "scissors") {
        result = "Tie!";
      } else {
        result = "Invalid choice!";
      }
    } else if (playerMove === `rock`) {
      if (computerChoice === `rock`) {
        result = "Tie!";
      } else if (computerChoice === "paper") {
        result = "You lose!";
      } else if (computerChoice === "scissors") {
        result = "You win!";
      } else {
        result = "Invalid choice!";
      }
    } else if (playerMove === `paper`) {
      if (computerChoice === `rock`) {
        result = "You win!";
      } else if (computerChoice === "paper") {
        result = "Tie!";
      } else if (computerChoice === "scissors") {
        result = "You lose!";
      } else {
        result = "Invalid choice!";
      }
    }
    
      if(result === "You win!"){
        score.player+=1;
      }
      else if(result === "You lose!"){
        score.computer+=1;
      }
        else if(result === "Tie!"){
          score.ties+=1;
        }
    localStorage.setItem("score", JSON.stringify(score));
    console.log(result);
    alert(
      `You picked ${playerMove}, Computer chose ${computerChoice} and ${result}
      Player: ${score.player} Computer: ${score.computer} Ties: ${score.ties}`
    );
  }
 
    function computerPlay() {
      let randomNumber = Math.random();

        if (randomNumber < 0.34) {
          computerPick = "rock";
        } else if (randomNumber <= 0.67) {
          computerPick = "paper";
        } else {
          randomNumber = "scissors";
        }
        return computerPick;
      }