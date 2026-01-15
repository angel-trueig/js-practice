const title = document.getElementById("title");
const description = document.querySelector(".description")
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function(){
    title.textContent = "DOM Manipulated!";
    description.textContent = "You have successfully changed the text using JavaScript.";
});

const newPara = document.createElement("p");
newPara.textContent = "This paragrapg was added using JS";

document.body.appendChild(newPara);

const input =document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const nameList = document.getElementById("nameList");

addBtn.addEventListener("click", function(){
    const addName = input.value;

    if(addName === "")return;

    const li = document.createElement("li");
    li.textContent = addName;
    nameList.appendChild(li);
    input.value = "";
});

nameList.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.style.textDecoration = "line-through";
    }
})

nameInput.addEventListener("keydown" , function(e){
    console.log(e.key);
})
