'use strict';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function renderHTML () {
  const div = document.querySelector('.content');

  const input = document.createElement('input'); 
  input.className = 'des form-control';

  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'btn btn-primary';
  button.textContent = 'add';
  button.addEventListener('click', function () {
    addItem();
  });
  
  div.appendChild(input);
  div.appendChild(button);

} 

function Todo (des) {
  this.id = guid();
  this.des = des; 
  this.check = false;
}

Todo.prototype.checked = function ( todo ) {
  this.check = !this.check;
}

function TodoList () {
  this.todos = [];
}

TodoList.prototype.add = function (todo) {
  this.todos.push(todo);
}

TodoList.prototype.remove = function ( todo ) {
  for( let i = 0; i < this.todos.length; i++){
    if ( this.todos[i].id === todo.id){
      this.todos.splice(this.todos[i], 1);
    }
  }
}

TodoList.prototype.filter = function () {
  this.todos.forEach(function (el){
    return el.check === true;
  })
}

const todoList = new TodoList();

function addItem () { 
  const val = document.querySelector('.des');
  const todo = new Todo (val.value);
  // if (val.value === '' ) { break; };
  todoList.add(todo);
  renderItem (todo);
  val.value = ''; 
}

function renderItem (todo) {
  const div = document.createElement('div');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.addEventListener('click', function () {
    todo.checked();
  });

  const p = document.createElement('span');
  p.innerText = todo.des;

  const button = document.createElement('button');
  button.textContent = 'delete';
  button.addEventListener('click', function () {
    div.remove();
    todoList.remove(todo);
  });

  div.appendChild(checkBox);
  div.appendChild(p);
  div.appendChild(button);

  document.querySelector('.description').appendChild(div);

  // return false;

}

window.onload = function () {
  renderHTML();
}