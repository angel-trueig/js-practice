let boxes = document.querySelectorAll('.box');
let newBtn = document.getElementById('newBtn');
let turnO = true;
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
            alert(`${pos1} won the game!`);
            return;
        }

    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})