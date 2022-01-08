import {Request , Response} from 'express';
import TaskModel, { ITask, ITaskObj } from '../models/task.model';

export default class TaskService {

    public findAll = async (req: Request , res: Response) => {
        const tasks: Array<ITaskObj> = await TaskModel.find();

        return res.json(tasks)
    }

    public create = async (req: Request , res: Response) => {

        const itask = req.body as ITask;
        const task = await TaskModel.create(itask);

        return res.json(task)
    }

    public findById = async (req: Request , res: Response) => {
        const task = await TaskModel.findById(req.params.id);

        return res.json(task)
    }
    
}