var todolist = {};

function sayHello(){
  alert("hello");
}


function addElement(val){ //adds new thing to list
  if(val!=""){
    listElement = document.createElement('li');
    listContainer = document.getElementById("list");
    checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked=false;
    listContainer.appendChild(listElement);
    listElement.innerHTML=val;
    listElement.appendChild(checkbox);
    document.getElementById("itemName").value=""; 
    todolist.push({"val":val,"isChecked":false});
    saveData();
}  else {
    alert("empty elements are not allowed");
  }
}
function saveData() {
  
  localStorage.myListContainer = JSON.stringify(todolist); 
}

function loadData() {
  todolist = JSON.parse(localStorage.myListContainer);
  for(var i=0;i<todolist.length;i++){
    console.log(todolist[i]);
    listElement = document.createElement('li');
    listContainer = document.getElementById("list");
    checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    function update(){
      checkbox.checked=true;
      saveData();
    }
    checkbox.onclick = update;
    
    checkbox.checked= todolist[i]["isChecked"];
    listContainer.appendChild(listElement);
    listElement.innerHTML=todolist[i]["val"];
    listElement.appendChild(checkbox);
    document.getElementById("itemName");
  }
}

