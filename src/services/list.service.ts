import {Request , Response} from 'express';
import Item, { IItem } from '../models/item.model';
import ListModel, { IList, IListObj } from '../models/list.model';

export default class TaskService {

    public findAll = async (req: Request , res: Response) => {
        const lists: Array<IListObj> = await ListModel.find();

        return res.json(lists)
    }

    public create = async (req: Request , res: Response) => {

        const ilist = req.body as IList;
        const list = await ListModel.create(ilist);

        return res.json(list)
    }

    public addItem = async (req: Request , res: Response) => {

        const iitem = req.body as IItem;

        const item = new Item(iitem)

        const list = await ListModel.findById(req.params.id);

        list?.itens.push(item);
        
        list?.save();

        return res.json(item)
    }

    public deleteItem = async (req: Request , res: Response) => {

        await ListModel.findByIdAndUpdate(req.params.id , {
            $pull: {
                itens: {
                    _id: req.params.item_id
                }
            }
        });

        const list = await ListModel.findById(req.params.id);

        setTimeout(()=>{
            
            console.log('Executed webhook.');
            
        }, 4000);

        return res.json(list)
    }

    public findById = async (req: Request , res: Response) => {

        const list = await ListModel.findById(req.params.id);

        return res.json(list)
    
    }
    
}