"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(route, subControllers = []) {
        this.subControllers = subControllers;
        this.route = route;
    }
    updateRoute(path = '') {
        console.log(this);
        if (this.subControllers) {
            for (let x of this.subControllers) {
                x.route = this.route + x.route;
                x.updateRoute();
            }
        }
        console.log('sub', this.subControllers);
    }
}
exports.Controller = Controller;
