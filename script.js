let boxes = document.querySelectorAll('.box');
let newBtn = document.getElementById('newBtn');
let turnO = true;
let gameOver = false;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = ()=>{
    let hasWin = false;
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 ==pos2 && pos2 == pos3 && pos1 !=""){
            gameOver = true;
            alert(`${pos1} won the game!`);
            
            disableBoxes();
            setTimeout(()=>{
                newGame();
            },1000);
            return;
        }

    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(gameOver || box.innerText != "") return;
        if(turnO){
            box.innerText = "O";
            box.style.color= "red";
            turnO = false;
            updateTurn();
        }else{
            box.innerText = "X";
            box.style.color= "black";
            turnO = true;
            updateTurn();
        }
        box.disabled = true;
        checkWinner();
    })
});

function disableBoxes(){
    boxes.forEach(box=>box.disabled = true);
}

function newGame(){
    turnO = true;
    gameOver= false;
    boxes.forEach(box=>{
        box.innerText = "";
        box.disabled = false;
    })

};

newBtn.addEventListener("click",newGame);


function updateTurn(){
    let turnDisplay = document.getElementById('turn');
    turnDisplay.innerText = turnO ? "Turn : O" : "Turn : X";
};