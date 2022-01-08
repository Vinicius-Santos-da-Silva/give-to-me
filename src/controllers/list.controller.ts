import * as express from 'express';

import ListService from '../services/list.service';

export default class ListController {

    public router = express.Router();
    public path = '/list'
    private listService: ListService;
    
    constructor() {
        this.listService = new ListService();
        this.setupRoutes();
    }

    public setupRoutes() {
        this.router.get(`${this.path}` , this.listService.findAll)
        this.router.get(`${this.path}/:id` , this.listService.findById)

        this.router.post(`${this.path}` , this.listService.create)
        this.router.post(`${this.path}/:id/item` , this.listService.addItem)

        this.router.delete(`${this.path}/:id/item/:item_id` , this.listService.deleteItem)
    }
}
