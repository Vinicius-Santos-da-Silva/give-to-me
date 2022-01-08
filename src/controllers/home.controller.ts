import * as express from 'express';

import HomeService from '../services/home.service';

export default class HomeController {

    public router = express.Router();
    public path = '/'
    private homeService: HomeService;
    
    constructor() {
        this.homeService = new HomeService();
        this.setupRoutes();
    }

    public setupRoutes() {
        this.router.get(`${this.path}` , this.homeService.helloWorld)
    }
}
