import { task } from "../Models/Task";
import TaskRepository from "../Repository/TaskRepository";


const taskrepository = new TaskRepository();


class TaskService{

    constructor(){

    }

    getTasks(status: string): any{
        const result = taskrepository.getTasks();

        const vetor: task[] = [];

        result.map((valor) =>{
            if(valor.status === status){
                vetor.push(valor);
            }
        });

        return vetor;

    }


    getTask(id:string): task | {}{
        const result = taskrepository.getTasks();
        const task = result.map((valor) =>{
            if(valor.id === id){
                return valor
            }
        })
        return task;
    }

    getIndexById(id_task: string): number{
        const result = taskrepository.getTasks();

        let position: number = -1;

        result.map((valor, index) =>{
            if(valor.id === id_task){
                position = index;
            }
        });
        return position;
    }



    addTask(data: task): task{
        return taskrepository.addTask(data);
    }


    update(data: task, id_task:string){

        const position = this.getIndexById(id_task);

        if (position !== -1){
            return taskrepository.update(data, position);
        } else {
            return {};
        }
        
    }

    delete(id_task: string){
        const position = this.getIndexById(id_task);

        if (position !== -1){
            return taskrepository.delete(position);
            

        } else {
            return ('Task not found!');
        }
    }

}


export default TaskService;