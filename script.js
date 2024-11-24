// const list =document.getElementById("header");
const inputvalue = document.getElementById("task");
const todoscontainer = document.querySelector(".todos");
const completedContainer = document.querySelector(".completed-todos");

const todosArray = [];
const completedArray = [];

function addvalue() {
  // todosArray.push(inputvalue.value);
  // displaytodo();

  // inputvalue.value = "";
  if (inputvalue.value.trim() !== "") {
    todosArray.push(inputvalue.value); // Add task to the array
    displaytodo(); // Update the displayed list

    // Show an alert message after adding a task
    // alert("Task added successfully!");

    inputvalue.value = ""; // Clear the input field
  } else {
    // Show an alert if the input is empty
    alert("Please enter a task before adding.");
  }
}

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");

function displaytodo() {
  todoscontainer.innerHTML = "";

  for (let i = 0; i < todosArray.length; i++) {
    const todopara = document.createElement("p");
    // todopara.innerHTML = `${todosArray[i]}<button onclick="remove(${i})">Remove</button>`;
    todopara.innerHTML = `${todosArray[i]} 
    <button style="color:white;background-color:red;margin:10px;border:red; width:1vw;" id=btn1 onclick="remove(${i})">&times</button> 
    <button style="color:white;background-color:green;margin:5px;border:green; width:1vw;"id=btn2 onclick="markAsDone(${i})">&#10003</button>`;
    todoscontainer.appendChild(todopara);

   
  }
}

function remove(index1) {
  todosArray.splice(index1, 1); // Adding a check mark as done indicator
  displaytodo(); // Re-render tasks to reflect changes
  displaycomplete();
}

function markAsDone(index2) {
  completedArray.push(todosArray[index2]); // Move task to completed array
  todosArray.splice(index2, 1); // Remove from todos array
  displaycomplete();
  displaytodo(); // Re-display tasks
}

function displaycomplete(){
  completedContainer.innerHTML = "";
  for (let j = 0; j < completedArray.length; j++) {
    const completedPara = document.createElement("p");
    completedPara.innerHTML = `${completedArray[j]} 
      <button style="color:white;background-color:red;margin:10px;border:red; width:1vw;" onclick="removeCompleted(${j})">&times;</button>`;
    completedContainer.appendChild(completedPara);
  }
}

function removeCompleted() {
   completedArray.splice(index, 1); // Remove one completed task at index
  displaycomplete(); // Re-display tasks
}
