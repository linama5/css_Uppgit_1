//check if JS file is loaded
console.log("script.js is loaded");

//selectors

const toDoInput = document.querySelector(".taskInput");
const toDoButton = document.querySelector(".addButton");
const toDoList = document.querySelector(".todoList");
//const alertdiv = document.querySelector("alert")
const alertp = document.querySelector(".alert");

//event listeners

toDoButton.addEventListener("click", addingTask);
//toDoList.addEventListener("click", eventClick);

//functions

function addingTask(event) {
  event.preventDefault();

  //verifying that the text field is no empty
  if (!toDoInput.value) {

    alertp.innerHTML="input must not be empty";
     
    return false;
  } else {

//delete the alert 


alertp.innerHTML ="";

    //create a div in HTML
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list and adding it to the div

    const newTodo = document.createElement("li");
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add("taskItem");
    todoDiv.appendChild(newTodo);

    //create the delete button and adding to the div

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = '<i class= "fas fa-trash"></i>';

    deleteButton.classList.add("deleteButton");
    todoDiv.appendChild(deleteButton);

    //append div to the list we have in HTML
    toDoList.appendChild(todoDiv);
  }
}
