import {Request, Response} from 'express';
import TaskService from '../Services/TaskService';

const taskservice = new TaskService();

class TaskController {

    constructor(){

    }


    getTasks(req: Request, res: Response){
        const status = req.query.status;

        if(status && (status === 'in_progress' || status === 'completed')){
            const result = taskservice.getTasks(status);
            res.json(result);
        } else {
            res.json({error: 'invalid: verify if the status were informed and if they are correct'});
            res.status(401);
        }
    }



    getTask(req: Request, res: Response){
        const {id} = req.params;

        if(id){
            const result = taskservice.getTask(id);
            res.json(result);
            res.status(200);

        } else {

            res.json({error: 'ID not found'});
            res.status(400);
        }
    }

    addTask(req: Request, res: Response){

        const {id, title, status, content} = req.body;

        if(id && title && status && content){

            if(status === 'completed' || status === 'in_progress'){
                const result = taskservice.addTask(req.body);
                res.json(result);
                res.status(201);
            } else{
                res.json({error: 'Status must be informed as "completed" or "in_progress"'});
                res.status(401);
            }
            

        } else {
            res.json({error: 'Invalid parameter'})
            res.status(401);
        }
    }


    update(req: Request, res: Response){
        const {id, title, content, status} = req.body;
        const {id_task} = req.params;

        if(id && title && content && status && id_task){

            if(status === 'completed' || status === 'in_progress'){
                const result = taskservice.update(req.body, id_task);

                if(Object.keys(result).length > 0){
                    res.json(result);
                }  else {
                    res.json({error: 'Task not found'});
                }        

                
            } else {
                res.json({error: 'Invalid status params'});
                res.status(401);
            }

        } else {

            res.json({error: 'Invalid params'});
            res.status(401);
        }
    }

    delete(req: Request, res: Response){
        const {id_task} = req.params;

        if(id_task){
            const result = taskservice.delete(id_task);
            res.json({result});

        } else {
            res.status(401).json({error: "Please inform the id_task"});
        }
    }
}

export default TaskController;