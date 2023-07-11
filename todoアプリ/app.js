const todoList = document.querySelector('#todo-list');
const form = document.querySelector('form');
const input = document.querySelector('input');
const editModal = document.querySelector('#edit-modal');

let todos = [];

// ToDoアイテムを追加する関数
function addTodo() {
  const todo = {
    id: new Date().getTime(),
    title: input.value,
    completed: false
  };

  todos.push(todo);
  renderTodos();
  input.value = '';
}

// ToDoアイテムを表示する関数
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', toggleTodo);

    const title = document.createElement('span');
    title.textContent = todo.title;
    title.addEventListener('click', editTodo);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', deleteTodo);

    li.appendChild(checkbox);
    li.appendChild(title);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
}

// ToDoアイテムを編集する関数
function editTodo() {
  const id = Number(this.parentNode.dataset.id);
  const todo = todos.find(todo => todo.id === id);

  const form = document.createElement
}
