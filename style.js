

let userScore = 0;
let compScore = 0;

// ✅ Select all images directly
const choices = document.querySelectorAll(".choice img");
const genCompChoice = () => {
    const options = ["rock","paper","Scissor"];
  const mathIx=  Math.ceil(Math.random()*3);
  return options[mathIx];
};

const drawGame=()=>{
    console.log("the game was drawn");
}
  const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
    }else{
        console.log("you loss");
    }

  }

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice",compChoice);
    //generate computer choice
    if(compChoice===userChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            userWin=compChoice==="Scissor"?false:true;
        }else{
           userWin= compChoice==="rock"?false:true;
        }

        
    }
}


// ✅ Loop through each image
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // ✅ Now this will work because <img> has the id
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
