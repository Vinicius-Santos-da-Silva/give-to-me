import App from "./App";
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import HomeController from "./controllers/home.controller";
import myLogMiddleware from "./middlewares/log.middleware";
import TaskController from "./controllers/task.controller";
import ListController from "./controllers/list.controller";

const port: any = process.env.PORT || 8080;

const app = new App({
    port:  Number(port),
    middlewares:[
        morgan('dev'),
        bodyParser.urlencoded({extended:true}),
        bodyParser.json(),
        myLogMiddleware
    ],
    controllers:[
        new HomeController(),
        new TaskController(),
        new ListController()
    ]
});

app.listen();