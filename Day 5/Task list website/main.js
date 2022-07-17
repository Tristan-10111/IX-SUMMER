class taskList{
    constructor(addTask){
        this.addTask = addTask;
    }
}

class userTaskList{
    constructor(){
        this.taskInput = document.getElementById('taskInput');
        this.form = document.getElementById('form');
        this.output = document.getElementById('tb-output');

        this.tasks = [];
    }

    addEventListeners(){
        this.form.addEventListener('submit', this.formSubmit)
    }

    formSubmit(event){
        event.preventDefault();


        const task = new taskList (
            this.taskInput.value
        );

        this.tasks.push(task)
        this.addTaskToTable();

    }

    addTaskToTable(){
        this.output.innerHTML = '';

        for(const task of tasks.value);

        const row = document.createElement('tr');
        const taskCell = document.createElement('td');

        taskCell.innerHTML = task.taskInput

        row.append(taskCell);

        this.output.append(row);
    }
}

const input = new userTaskList();
input.addEventListeners();