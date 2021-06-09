let addtodolist = document.querySelector(".add-todo");
let todoinput = document.querySelector(".todo-input");
let todolist = document.querySelector(".todo-list-container");

todoinput.addEventListener( "keypress" , function(e){
    if(e.key == "Enter"){
        addtodo();
    }
});

addtodolist.addEventListener( "click" , function(){
    addtodo();
});


function addtodo(){
    let todoinputvalue = todoinput.value;
    if(todoinputvalue){
        console.log(todoinputvalue);
        appendtodo(todoinputvalue);
        todoinput.value = "";
    }
}

function appendtodo(todo){
    let todolistdiv = document.createElement("div");
    todolistdiv.classList.add("todo-items");

    let ptag = document.createElement("p");
    ptag.classList.add("todo");
    ptag.textContent = todo;

    let deletebutton = document.createElement("button");
    deletebutton.classList.add(".delete-todo");
    deletebutton.textContent = "Delete";

    deletebutton.addEventListener( "click" , deletetodo);

    todolistdiv.append(ptag);
    todolistdiv.append(deletebutton);

    todolist.append(todolistdiv);
}

function deletetodo(e){
    e.target.parentNode.remove();
}