import App from "./App";
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import HomeController from "./controllers/home.controller";
import myLogMiddleware from "./middlewares/log.middleware";
import TaskController from "./controllers/task.controller";
import ListController from "./controllers/list.controller";

const app = new App({
    port: 3000,
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