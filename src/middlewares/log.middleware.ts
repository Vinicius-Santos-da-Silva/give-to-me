import {Request , Response} from 'express';

const myLogMiddleware = (req: Request , res: Response , next:any ) => {
    console.log('My Miiddleware working with TS');
    next();
}

export default myLogMiddleware;