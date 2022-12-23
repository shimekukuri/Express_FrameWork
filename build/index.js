"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Controller_1 = require("./controllers/Controller");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/yolo', (req, res) => {
    res.status(200).send(`
    <div>meep<div>
  `);
});
app.listen(3001, () => {
    console.log('listening on port whateer');
});
const controller1 = new Controller_1.Controller('/');
const controller2 = new Controller_1.Controller('/2', [controller1]);
const controller3 = new Controller_1.Controller('/3', [controller1, controller2]);
controller3.updateRoute();
