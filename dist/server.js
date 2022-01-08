"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const bodyParser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const home_controller_1 = __importDefault(require("./controllers/home.controller"));
const log_middleware_1 = __importDefault(require("./middlewares/log.middleware"));
const task_controller_1 = __importDefault(require("./controllers/task.controller"));
const list_controller_1 = __importDefault(require("./controllers/list.controller"));
const app = new App_1.default({
    port: 3000,
    middlewares: [
        (0, morgan_1.default)('dev'),
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json(),
        log_middleware_1.default
    ],
    controllers: [
        new home_controller_1.default(),
        new task_controller_1.default(),
        new list_controller_1.default()
    ]
});
app.listen();
