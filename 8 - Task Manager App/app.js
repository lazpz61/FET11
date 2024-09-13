/*
1. Access/target HTML elements

*/

//todo-input / todo-button /  filter-todo / todo-list


//Inialize all the variables that you will be choosing to manipulate the DOM
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const filterTodo = document.querySelector(".filter-todo")
const todoList = document.querySelector(".todo-list")


// Step 2: Create listners.
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteorCompleteTodo);
filterTodo.addEventListener("change",filterTodos);





function addTodo(e){
    //Group of statements that we want to run

    //Prevent the form submission
    e.preventDefault();

    //Create the todoDiv container
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");

    //Create a new todo list item.
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //Create the complete todo button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton)

    //Create the delete todo button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv);

    todoInput.value = "";

}

function deleteorCompleteTodo(e){
    //Group of Statements
    const target = e.target;
    console.log(target);
    // Check to see if the trash-btn is the className of the target

    if (target.classList.contains("trash-btn")){
        const todoDiv = target.parentElement;
        todoDiv.classList.add("fall");
        console.log(todoDiv);

        todoDiv.addEventListener("transitionend", function (){
            todoDiv.remove();
        })
    }

    if (target.classList.contains("complete-btn")){
        const todoDiv = target.parentElement;
        todoDiv.classList.toggle("completed");
    }


}

function filterTodos(e){
    //Group of statements
    console.log(e.target.value)
    //Access all of our todo's
    const todos = todoList.childNodes;
    // console.log(todos)
    todos.forEach(function (todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
                break
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
        }

    })


}

