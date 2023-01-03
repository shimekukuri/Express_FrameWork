'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Controller = void 0;
class Controller {
  constructor(route, subControllers = []) {
    this.subControllers = subControllers;
    this.route = route;
    console.log(this.subControllers);
    if (this.subControllers) {
      console.log(this.route);
    } else {
      console.log('root');
    }
  }
}
exports.Controller = Controller;
