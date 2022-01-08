"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myLogMiddleware = (req, res, next) => {
    console.log('My Miiddleware working with TS');
    next();
};
exports.default = myLogMiddleware;
