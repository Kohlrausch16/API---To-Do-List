import {Router} from 'express';
import TaskController from './src/Controllers/TaskController';

const taskcontroller = new TaskController();

const router = Router();

router.get('/task', taskcontroller.getTasks);
router.get('/task/:id', taskcontroller.getTask);
router.post('/task', taskcontroller.addTask);
router.put('/task/:id_task', taskcontroller.update)
router.delete('/task/:id_task', taskcontroller.delete);



export default router;