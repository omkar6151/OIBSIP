document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;

            li.querySelector('.delete-button').addEventListener('click', function () {
                taskList.removeChild(li);
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    });
});
