var todos = [];

function addTodo() {
    var inputValue = document.getElementById('todoInput').value;
    todos.push(inputValue);
}

function printTodos() {
    var list = document.getElementById('toDoList');
    list.innerHTML = ''; //Reset the list content whenever we print the todos, so we don't end up with duplicate todo items.

    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        var listItem = li.appendChild(document.createTextNode(todos[i]));
        list.appendChild(listItem);
    }
}

document.getElementById('click', function() {
    addTodo();
    printTodos();
})