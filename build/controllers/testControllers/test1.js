"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const Controller_1 = require("../Controller");
class TestController extends Controller_1.Controller {
    constructor() {
        super('/test');
        this.get = (path) => {
            if (path[0] !== '/') {
                path = '/' + path;
            }
            return {
                path: path,
                handler: (req, res) => {
                    res.send('hello');
                },
            };
        };
    }
}
exports.TestController = TestController;
