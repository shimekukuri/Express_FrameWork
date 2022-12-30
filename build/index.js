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
const controller1 = new Controller_1.Controller('/1');
const controller2 = new Controller_1.Controller('/2', [controller1]);
const controller3 = new Controller_1.Controller('/3', [controller2]);
const controller4 = new Controller_1.Controller('/4', [controller3]);
const c5 = new Controller_1.Controller('/5');
const c6 = new Controller_1.Controller('/6', [c5]);
const c7 = new Controller_1.Controller('/7');
const c8 = new Controller_1.Controller('/8', [c6, c7]);
c8.updateRoute();
