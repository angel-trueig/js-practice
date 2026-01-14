let btn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

btn.addEventListener('click', function() {
    let input = taskInput.value;
    if(input === ""){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement('li');
    li.textContent = input;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
})

taskList.addEventListener("click" , function(event){
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
    }
})