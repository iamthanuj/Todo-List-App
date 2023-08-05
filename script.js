let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const todoText = document.querySelector(".js-todo-text");
const todoDate = document.querySelector(".js-date");

renderTodo();
document.querySelector(".js-add-btn").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const todo = {
    todoName: todoText.value,
    todoDate: todoDate.value,
  };
  todoList.push(todo);

  renderTodo();
  saveLocal();
  todoText.value = "";
}

function renderTodo() {
  let listHTML = "";
  todoList.forEach((todo, index) => {
    listHTML += `<li class="todo-item">${todo.todoName} - ${todo.todoDate}<span class="todo-item-right-side"><button
        class="edit-btn">Edit</button> <button class="remove-btn" onclick="removeTodo(${index})" >Remove</button></span></li>`;
  });

  document.querySelector(".js-todo-li-list").innerHTML = listHTML;
}

function removeTodo(index) {
  todoList.splice(index, 1);
  renderTodo();
  saveLocal();
}

function editTodo(index) {
  todoList;
  saveLocal();
}

function saveLocal() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
