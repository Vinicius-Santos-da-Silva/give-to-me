"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
const cors = require('cors');
class App {
    constructor(appConfig) {
        this.app = (0, express_1.default)();
        this.app.use(cors());
        this.app.options('*', cors());
        this.port = appConfig.port;
        this.setMongooseConnection();
        this.setMiddlewares(appConfig.middlewares);
        this.setControllers(appConfig.controllers);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Express has been started.");
        });
    }
    setMiddlewares(middlewares) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }
    setControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }
    setMongooseConnection() {
        const mongo_url = `${process.env.MONGODB_URL}`;
        mongoose_1.default.connect(mongo_url);
    }
}
exports.default = App;
