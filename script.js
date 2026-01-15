const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function getLocalTasks(){
    return JSON.parse(localStorage.getItem('tasks')) || [];

};

function saveLocalTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function render(){
    taskList.innerHTML = '';
    const tasks = getLocalTasks();

    tasks.forEach(task =>{
        const li = document.createElement('li');
        li.textContent = task.text;

        const deletebtn = document.createElement('button');
        deletebtn.textContent = "Delete";
        deletebtn.addEventListener('click', () =>{
            deleteTask(task.id);
        });
        li.appendChild(deletebtn);
        taskList.appendChild(li);
        });
    };

function addTask(){
    const text = taskInput.value;

    if(text ==="") return;
    const tasks = getLocalTasks();

    const newTask = {
        id:Date.now(),
        text:text
    };
    tasks.push(newTask);
    saveLocalTasks(tasks);
    taskInput.value = '';
    render();
};

function deleteTask(id){
    let tasks = getLocalTasks();
    tasks= tasks.filter(task => task.id !== id);
    saveLocalTasks(tasks);
    render();
}
addTaskBtn.addEventListener('click', addTask);

render();