import {Request , Response} from 'express';

export default class HomeService {

    public helloWorld = (req: Request , res: Response) => {
        return res.json({
            msg: `Hello world from express + Typescript.`
        })
    }
    
}