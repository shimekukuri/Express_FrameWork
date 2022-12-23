"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const buildPath_1 = require("../utils/buildPath");
class Controller {
    constructor(route, subControllers = []) {
        this.subControllers = subControllers;
        this.route = route;
        if (subControllers) {
            for (let x of subControllers) {
                x.subPath = this.route;
                if (x.subPath) {
                    x.route = x.subPath + x.route;
                }
            }
            //console.log(this);
            //console.log(subControllers);
        }
    }
    updateRoute() {
        (0, buildPath_1.buildPath)(this);
    }
}
exports.Controller = Controller;
