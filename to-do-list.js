// script.js
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Voer een taak in.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
});
