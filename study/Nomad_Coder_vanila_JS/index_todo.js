const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todoList');

const TODO_LIST = 'todoItem';

let todo_items = [];

function handleClick(event){
    const item_btn = event.target;
    const item = item_btn.parentNode;
    todoList.removeChild(item);
    todo_items = todo_items.filter(function(array_item){
        // return array_item.id !== parseInt(item.id);
        return array_item.id !== item.id;
    });
    localStorage.setItem(TODO_LIST, JSON.stringify(todo_items));
}

function paintTodoItem(item){
    const item_li = document.createElement('li');
    item_li.id = item.id;
    const item_span = document.createElement('span');
    item_span.innerText = item.text;
    const item_button = document.createElement('button');
    item_button.addEventListener('click', handleClick);
    item_button.id = item.id;
    item_button.innerText = 'X'
    item_li.appendChild(item_span);
    item_li.appendChild(item_button);
    todoList.appendChild(item_li);
}

function handleSubmit(event){
    event.preventDefault();
    const item = {
        // id : todo_items.length + 1,
        id : new Date(),
        text : todoInput.value
    };
    todoInput.value = '';
    todo_items.push(item);
    localStorage.setItem(TODO_LIST, JSON.stringify(todo_items));
    paintTodoItem(item);
}

function init(){
    const todoItems = localStorage.getItem(TODO_LIST);
    if (todoItems === null){
        localStorage.setItem(todoItems, []);
    }else{
        const parsedTodoItems = JSON.parse(todoItems);
        parsedTodoItems.forEach(function(item){
            todo_items.push(item);
            paintTodoItem(item);
        });
        // getTodoItems(parsedTodoItems);
        // paintTodoItems();
    }
    todoForm.addEventListener("submit", handleSubmit);
}

init();