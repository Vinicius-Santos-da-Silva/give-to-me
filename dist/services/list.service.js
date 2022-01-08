"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_model_1 = __importDefault(require("../models/item.model"));
const list_model_1 = __importDefault(require("../models/list.model"));
class TaskService {
    constructor() {
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const lists = yield list_model_1.default.find();
            return res.json(lists);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const ilist = req.body;
            const list = yield list_model_1.default.create(ilist);
            return res.json(list);
        });
        this.addItem = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const iitem = req.body;
            const item = new item_model_1.default(iitem);
            const list = yield list_model_1.default.findById(req.params.id);
            list === null || list === void 0 ? void 0 : list.itens.push(item);
            list === null || list === void 0 ? void 0 : list.save();
            return res.json(item);
        });
        this.deleteItem = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield list_model_1.default.findByIdAndUpdate(req.params.id, {
                $pull: {
                    itens: {
                        _id: req.params.item_id
                    }
                }
            });
            const list = yield list_model_1.default.findById(req.params.id);
            setTimeout(() => {
                console.log('Executed webhook.');
            }, 4000);
            return res.json(list);
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const list = yield list_model_1.default.findById(req.params.id);
            return res.json(list);
        });
    }
}
exports.default = TaskService;
