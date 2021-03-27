let userScore = 0;
let computerScore = 0;
let winningrate = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const winningrate_span = document.getElementById("w-r-num");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userchoice_div = document.getElementById("userchoice");
const compchoice_div = document.getElementById("compchoice");
const reset_btn = document.getElementById("resetbtn");

// const smallUserWord = "user".fontsize(3).sub();
// const smallCompWord = "comp".fontsize(3).sub();

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors"
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  winningrate_span.innerHTML = Math.round(100*userScore/(userScore+computerScore));
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥 `
  userChoice_div.classList.add('green-glow');
  setTimeout(()=> userChoice_div.classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  winningrate_span.innerHTML = Math.round(100*userScore/(userScore+computerScore));
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... 😖`
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw. `
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  const rock_img = "<img src=\"images/hand-rock-1.png\" alt=\"rock\">";
  const paper_img =  "<img src=\"images/hand-1.png\" alt=\"paper\">";
  const scissors_img = "<img src=\"images/hand-scissors-1.png\" alt=\"scissors\">";
  switch (userChoice + computerChoice){
    case "rs":
      userchoice_div.innerHTML = rock_img;
      compchoice_div.innerHTML = scissors_img;
      win(userChoice,computerChoice);
      break;
    case "pr":
      userchoice_div.innerHTML = paper_img;
      compchoice_div.innerHTML = rock_img;
      win(userChoice,computerChoice);
      break;
    case "sp":
      userchoice_div.innerHTML = scissors_img;
      compchoice_div.innerHTML = paper_img;
      win(userChoice,computerChoice);
      break;
    case "rp":
      userchoice_div.innerHTML = rock_img;
      compchoice_div.innerHTML = paper_img;
      lose(userChoice,computerChoice);
      break;
    case "ps":
      userchoice_div.innerHTML = paper_img;
      compchoice_div.innerHTML = scissors_img;
      lose(userChoice,computerChoice);
      break;
    case "sr":
      userchoice_div.innerHTML = scissors_img;
      compchoice_div.innerHTML = rock_img;
      lose(userChoice,computerChoice);
      break;
    case "rr":
    userchoice_div.innerHTML = rock_img;
    compchoice_div.innerHTML = rock_img;
    draw(userChoice,computerChoice);
    break;
    case "pp":
    userchoice_div.innerHTML = paper_img;
    compchoice_div.innerHTML = paper_img;
    draw(userChoice,computerChoice);
    break;
    case "ss":
    userchoice_div.innerHTML = scissors_img;
    compchoice_div.innerHTML = scissors_img;
      draw(userChoice,computerChoice);
      break;
  }
}

function show(userChoice){

}

function reset(){
  userScore = computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  winningrate_span.innerHTML = 0;
  userchoice_div.innerHTML = "";
  compchoice_div.innerHTML = "";
}

function main() {

  rock_div.addEventListener('click', ()=> game("r"));
  paper_div.addEventListener('click', ()=> game("p"));
  scissors_div.addEventListener('click', () => game("s"));
  reset_btn.addEventListener('click', () => reset());
}

main();
