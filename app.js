let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("User-score");
const compscore_span = document.getElementById("Comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sc");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");
function getComputerChoice(){
  const choices = ['r', 'p', 'sc', 'l', 'sp'];
  const randomnumber = Math.floor(Math.random() * 5);
  return choices[randomnumber];
}

function convertToWord(letter){
  if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
      if(letter === "sc") return "Scissors";
       if(letter === "l") return "Lizard";
      if(letter === "sp") return "Spock";
}
function win(userChoice, computerChoice){
  userscore++;
  userscore_span.innerHTML = userscore;
  compscore_span.innerHTML = compscore;
result_p.innerHTML = `You Picked : ${convertToWord(userChoice)}   <br>Computer Picked : ${convertToWord(computerChoice)} <br>${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} => So, You Win 😉 🎉`;
}
function lose(userChoice, computerChoice){
compscore++;
userscore_span.innerHTML = userscore;
compscore_span.innerHTML = compscore;
result_p.innerHTML = `You Picked : ${convertToWord(userChoice)} <br> Computer Picked : ${convertToWord(computerChoice)} <br>${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} => So, You lose 😣`;
}
function draw(userChoice, computerChoice){

  result_p.innerHTML = `You Picked : ${convertToWord(userChoice)} <br> Computer Picked : ${convertToWord(computerChoice)} <br>${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} => So, Its a Draw 😅`;
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
  case "scp":
    case "pr":
      case "rl":
        case "lsp":
          case "spsc":
          case "scl":
          case "lp":
          case "psp":
          case "spr":
          case "rsc":
          win(userChoice, computerChoice);
          break;

            case "psc":
              case "rp":
                case "lr":
                  case "spl":
                    case "scsp":
                    case "lsc":
                      case "pl":
                        case "spp":
                          case "rsp":
                            case "scr":
              lose(userChoice, computerChoice);
                break;

                  case "rr":
                    case "pp":
                      case "scsc":
                        case "ll":
                          case "spsp":
                        draw(userChoice, computerChoice);
                          break;
}
}
function main(){
rock_div.addEventListener('click', function() {
  game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
  game("sc");
})
lizard_div.addEventListener('click', function() {
  game("l");
})
spock_div.addEventListener('click', function() {
  game("sp");
})
}

main();
