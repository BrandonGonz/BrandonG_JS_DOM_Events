const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function createListItem(taskText) {
    let listItem = document.createElement('li')
    listItem.textContent = taskText;
    return listItem;
}

const testItem = createListItem('This is a test task');
taskList.appendChild(testItem);

//  offical push of todo js file