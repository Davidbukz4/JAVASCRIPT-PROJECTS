/*
 *Model section
 */
// if local storage has a todos array use it otherwise use default
let todos;
const savedTodos = JSON.parse(localStorage.getItem("todos"));
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "Get groceries",
      dueDate: "2023-04-06",
      id: "id1",
    },
    {
      title: "Wash car",
      dueDate: "2023-04-07",
      id: "id2",
    },
    {
      title: "Make dinner",
      dueDate: "2023-04-08",
      id: "id3",
    },
    {
      title: "Do laundry",
      dueDate: "2023-04-09",
      id: "id4",
    },
  ];
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

/*
 * Controller section
 */
// adds a todo
function addTodo() {
  // todo title
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;
  // tod date
  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;
  createTodo(title, dueDate);
  render();
}

// Deletes a todo
function deleteTodo(event) {
  const deleteBtn = event.target;
  const idToDelete = deleteBtn.id;
  removeTodo(idToDelete);
  render();
}

// Remove todo
function removeTodo(idToDelete) {
  todos = todos.filter((todo) => {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}

// creates a todo
function createTodo(title, dueDate) {
  const id = String(new Date().getTime());
  todos.push({ title: title, dueDate: dueDate, id: id });
  saveTodos();
}

// completes todo task
function completeTodo(event) {
  const checkbox = event.target;
  todos.forEach((todo) => {
    if (checkbox.dataset.todoId === todo.id) {
      todo.isDone = checkbox.checked;
    }
  });
  saveTodos();
}

/*
 * View section
 */
function render() {
  // clears the list
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    // create element
    const element = document.createElement("div");
    element.innerText = todo.title + " " + todo.dueDate;
    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.dataset.todoId = todo.id;
    checkbox.onchange = completeTodo;
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.id = todo.id;
    deleteBtn.style = "margin-left: 15px;";
    deleteBtn.onclick = deleteTodo;
    if (todo.isDone === true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    element.prepend(checkbox);
    element.appendChild(deleteBtn);
    todoList.appendChild(element);
  });
}
render();
