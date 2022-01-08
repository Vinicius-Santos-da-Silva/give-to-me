"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeService {
    constructor() {
        this.helloWorld = (req, res) => {
            return res.json({
                msg: `Hello world from express + Typescript.`
            });
        };
    }
}
exports.default = HomeService;
