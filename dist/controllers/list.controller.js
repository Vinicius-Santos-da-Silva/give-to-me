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
const express = __importStar(require("express"));
const list_service_1 = __importDefault(require("../services/list.service"));
class ListController {
    constructor() {
        this.router = express.Router();
        this.path = '/list';
        this.listService = new list_service_1.default();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get(`${this.path}`, this.listService.findAll);
        this.router.get(`${this.path}/:id`, this.listService.findById);
        this.router.post(`${this.path}`, this.listService.create);
        this.router.post(`${this.path}/:id/item`, this.listService.addItem);
        this.router.delete(`${this.path}/:id/item/:item_id`, this.listService.deleteItem);
    }
}
exports.default = ListController;
