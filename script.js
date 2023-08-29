
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        let spanDelete = document.createElement("span");
        spanDelete.innerHTML = "\u00d7";
        spanDelete.classList.add("delete-button");
        spanDelete.addEventListener("click", deleteTask);
        li.appendChild(spanDelete);

        let spanUpdate = document.createElement("span");
        spanUpdate.innerHTML = "\u270E"; // Edit icon
        spanUpdate.classList.add("update-button");
        spanUpdate.addEventListener("click", updateTask);
        li.appendChild(spanUpdate);
        
        listContainer.appendChild(li);
    }
    
    inputBox.value = "";
}

function deleteTask(event) {
    let taskItem = event.target.parentElement;
    taskItem.remove();
}

function updateTask(event) {
    let taskItem = event.target.parentElement;
    let currentTask = taskItem.firstChild.textContent;
    let updatedTask = prompt("Update the task:", currentTask);
    
    if (updatedTask !== null) {
        taskItem.firstChild.textContent = updatedTask;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteTask);
    });

    let updateButtons = document.querySelectorAll(".update-button");
    updateButtons.forEach(button => {
        button.addEventListener("click", updateTask);
    });
});
 