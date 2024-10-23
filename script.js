// const list =document.getElementById("header");
const inputvalue = document.getElementById("task");
const todoscontainer = document.querySelector(".todos");


const todosArray = [];

function addvalue() {
  todosArray.push(inputvalue.value);
  displaytodo();
}

function displaytodo() {
  todoscontainer.innerHTML = "";
  for (let i = 0; i < todosArray.length; i++) {
    const todopara = document.createElement("p");
    // todopara.innerHTML = `${todosArray[i]}<button onclick="remove(${i})">Remove</button>`;
   todopara.innerHTML = `${todosArray[i]} 
    <button style="color:white;background-color:red;margin:10px;border:red; width:1vw;" onclick="remove(${i})">&times</button> 
    <button style="color:white;background-color:green;margin:5px;border:green; width:1vw;" onclick="markAsDone(${i})">&#10003</button>`; 
    todoscontainer.appendChild(todopara);

    
  }
}

function remove(index1) {
  todosArray.splice(index1,1);
  todoscontainer.innerHTML = "";
  for (let i = 0; i < todosArray.length; i++) {
    const todopara1 = document.createElement("p");
    todopara1.innerHTML = `${todosArray[i]} <button style="color:white;background-color:red;margin:10px;border:red; width:1vw;" onclick="remove(${i})">&times</button> `;
    todoscontainer.appendChild(todopara1);
   
  }
}

function markAsDone(index2){
    todosArray.splice(index2, 1);
    todoscontainer.innerHTML = "";
    for (let i = 0; i < todosArray.length; i++) {
      const todopara = document.createElement("p");
      todopara.innerHTML = `${todosArray[i]}<button style="color:white;background-color:green;margin:5px;border:green; width:1vw;" onclick="markAsDone(${i})">&#10003</button>`;
      todoscontainer.appendChild(todopara);
    }

}

 


// function edit(index3) {
//   todosArray.splice(index3, 1);
//   todoscontainer.innerHTML = "";
//   for (let i = 0; i < todosArray.length; i++) {
//     const todopara = document.createElement("p");
//     todopara.innerHTML = `${todosArray[i]}<button onclick="completed(${i})">&#9998 Edit</button>`;
//     todoscontainer.appendChild(todopara);
//   }
  
// }
// const value= inputvalue.value;
// console.log(value);
// //create todo element
// const todapara =document.createElement("p");
// todapara.innerText =  todosArray[i];

// todoscontainer.appendChild(todapara);
