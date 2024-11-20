import { task } from "../Models/Task";

class TaskRepository{

    private tasks: task[];

    constructor(){
        this.tasks = [];
    }

    getTasks(): task[] {
        return this.tasks;
    }

    addTask(data: task): task{
        this.tasks.push(data);
        return data;
    }

    update(data: task, position: number){
        this.tasks[position] = data;
        return data;

    }

    delete(position: number){
        delete this.tasks[position];
        return ('Position deleted successufully');
    }

}

export default TaskRepository;