let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const todoText = document.querySelector(".js-todo-text");
const todoDate = document.querySelector(".js-date");
const closeBtn = document.querySelector(".close-btn");
const editLayer = document.querySelector(".js-edit-layer");

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

  document.querySelectorAll(".edit-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      editLayer.style.visibility = "visible";
      editTodo(index);
    });
  });
}

function removeTodo(index) {
  todoList.splice(index, 1);
  renderTodo();
  saveLocal();
}

function editTodo(index) {
  const todo = todoList[index];
  const editText = document.querySelector(".js-edit-text");
  const editDate = document.querySelector(".js-edit-date");
  editText.value = todo.todoName;
  editDate.value = todo.todoDate;

  document.querySelector(".js-save-btn").addEventListener("click", () => {
    todo.todoName = editText.value;
    todo.todoDate = editDate.value;
    editLayer.style.visibility = "hidden";
    renderTodo();
    saveLocal();
  });
}

function saveLocal() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

closeBtn.addEventListener("click", () => {
  editLayer.style.visibility = "hidden";
});
