import express , { Application } from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const cors = require('cors');

class App {

    public app: Application
    public port: Number

    constructor(appConfig: { port: Number , middlewares: any , controllers: any}) {
        this.app = express();
        this.app.use(cors());
        this.app.options('*', cors());
        this.port = appConfig.port;
        this.setMongooseConnection();
        this.setMiddlewares(appConfig.middlewares);
        this.setControllers(appConfig.controllers);


    
    }

    public listen() {
        this.app.listen(this.port , () => {
            console.log("Express has been started.");
        })
    }

    private setMiddlewares(middlewares: { forEach: (mid: (middleware: any) => void) => void;}) {
    
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    
    }

    private setControllers(controllers: { forEach: (mid: (controller: any) => void) => void;}) {
        
        controllers.forEach(controller => {
            this.app.use('/' , controller.router)
        })
    
    }

    private setMongooseConnection() {
        
        const mongo_url: string = `${process.env.MONGODB_URL}`;

        console.log(mongo_url)
        
        mongoose.connect(mongo_url)
    
    }
}

export default App;