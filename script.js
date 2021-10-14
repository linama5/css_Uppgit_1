//check if JS file is loaded
console.log("script.js is loaded");

//selectors

const toDoInput = document.querySelector(".taskInput");
const toDoButton = document.querySelector(".addButton");
const toDoList = document.querySelector(".todoList");
const alertp = document.querySelector(".alert");

const number = document.createElement("p");
const numberdiv = document.querySelector(".numberOfComplete");

const todoListArray = [];

//event listeners

toDoButton.addEventListener("click", addingTask);
//toDoList.addEventListener("click", eventClick);

toDoList.addEventListener("click", eventClick);

toDoInput.addEventListener("click", countToCero);

//functions

function addingTask(event) {
  event.preventDefault();

  //verifying that the text field is no empty
  if (!toDoInput.value) {
    alertp.innerHTML = "input must not be empty";

    return false;
  } else {
    //delete the alert inner text
    alertp.innerHTML = "";

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

    //push object to array
    todoListArray.push(todoDiv);

    //clear the textfile
    toDoInput.value = "";
  }
}

function eventClick(e) {
  //find which button is clicked

  const buttonOnclicked = e.target;

  if (buttonOnclicked.classList[0] === "deleteButton") {
    //grab the parent of the element we want to delete
    const parent = buttonOnclicked.parentElement;
    parent.remove();

    children = parent.children[0];
    // console.log(children);

    for (let i = 0; i < todoListArray.length; i++) {
      if (parent == todoListArray[i]) {
        //remove one div from the array in that Index
        todoListArray.splice([i], 1);
      }
    }
  } else {
    const parent1 = buttonOnclicked.parentElement;
    parent1.classList.toggle("completed");

   myCounter();
    }
  }


function myCounter() {
  var count = 0;
  for (let i = 0; i < todoListArray.length; i++) {
    if (todoListArray[i].classList == "todo completed") {
      ++count;

      number.innerText = count;
      numberdiv.appendChild(number);
    }
}
}

function countToCero(){

number.innerHTML = 0;
numberdiv.append(number);

}