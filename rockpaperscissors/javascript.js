function computerPlay() {
	let n = Math.random();
	if (n<=(1/3)) {
		return 'Rock';
	} else if (n<=(2/3)) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
}


const play=["Rock","Paper","Scissors"];



let playerSelection=prompt("Do you choose rock, paper or scissors?");
let computerSelection=computerPlay(play);


function selectRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        return "Its a tie try once more";
    }

    if(playerSelection==="Rock"){
        if(computerSelection==="Scissors"){
        return "You win Scissors beats Rock!!"; }

     else {
        return "You lose Rock unbeat Scissors";
     }
    }
    if (playerSelection==="Paper"){
        if (computerSelection==="Rock"){
        return "You win Paper beat Rock ";
    }
     else {return "You lose Paper unbeat Scissors ";
}}
        if(playerSelection==="Scissors"){
            if(computerSelection==="Rock"){
            return "You lose Sciissors unbeat Rock ";
        }
      else {return "You win Scissors beat Rock";

    }
    }
    }
    function playerPlay() {
        while (true) {
            let selection = prompt("Enter Rock, Paper, or Scissors");
            if (selection!=null) {
                selection = selection.toLowerCase();
            }
            if (selection=='rock') {
                return 'Rock';
            } else if (selection=='paper') {
                return 'Paper';
            } else if (selection=='scissors') {
                return 'Scissors';
            } else {
                alert(`"${selection}" is not a valid choice, please re-enter`);
            }
            setTimeout(function(){},500);
        }
    }
   
function game() {
	let score = [0,0]; 

	for (let i=0;i<5;i++) {
		score=selectRound(playerPlay(),computerPlay(), score);
	}
	let result;

	if (score[0]>score[1]) {
		result='win';
	} else if (score[0]<score[1]) {
		result='lose';
	} else {
		result='tie';
    }

console.log(`The final score is ${score[0]} to ${score[1]}. You ${result}!`);
}
    console.log(selectRound(playerSelection,computerSelection));
    console.log(game());
    
     

