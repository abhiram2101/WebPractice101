document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const tasksList = document.getElementById('tasks');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const status = document.getElementById('status').value;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${title}</span>
            <span>${description}</span>
            <span>${status}</span>
            <button class="delete">Delete</button>
        `;

        taskItem.querySelector('.delete').addEventListener('click', function () {
            taskItem.remove();
        });

        tasksList.appendChild(taskItem);

        taskForm.reset();
    });
    completevar = document.getElementById("sel-completed");
    Progressvar = document.getElementById("sel-progress");
    notstartedvar = document.getElementById("sel-notStarted");

    if (completevar.value == "completed" ){
        completevar.style.backgroundColor="green";
        completevar.style.color="white";
    }
    if (notstartedvar.value == "not-started" ){
        notstartedvar.style.backgroundColor="red";
        notstartedvar.style.color="white";
    }
   if (Progressvar.value == "in-progress" ){
        Progressvar.style.backgroundColor="blue";
        Progressvar.style.color="white";
    }
});
