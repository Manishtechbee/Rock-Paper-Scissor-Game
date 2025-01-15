let userScore= 0;
let compScore= 0;
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const resetBtn=document.querySelector("#btn");
const resetGame=()=>{
    userScore=0;
    compScore=0;
    uScore.innerText=userScore;
    cScore.innerText=compScore;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#081b31";
}
resetBtn.addEventListener("click",resetGame);
const drawGame=(userChoice)=>{
    msg.innerText=`The game is draw at ${userChoice}`;
    msg.style.backgroundColor="#081b31";
    setTimeout(() => {
        msg.innerText="Play Your Move";
        msg.style.backgroundColor="#081b31";
    }, 5000);
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        uScore.innerText=userScore;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
        setTimeout(() => {
            msg.innerText="Play Your Move";
            msg.style.backgroundColor="#081b31";
        }, 5000);
    }
    else{
        compScore++;
        cScore.innerText=compScore;
        msg.innerText=`You loose! try again, ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
        setTimeout(() => {
            msg.innerText="Play Your Move";
            msg.style.backgroundColor="#081b31";
        }, 3000);
    }
}
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    //need to generate random indexes within 0-2 therefore require Math.random function 
    // and for range 0-2 we can multiply it with 3 (range=3-1)
    //and do floor
    return options[Math.floor(Math.random()*3)];
}
const playGame=(userChoice)=>{
    //computer choice
    const compChoice=genCompChoice();
    if(userChoice==compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="rock"?true:false;
        }
        else{
            userWin=compChoice=="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})