import { buildPath } from '../utils/buildPath';

export class Controller {
  route: string;
  subControllers?: Controller[];
  subPath?: string;

  constructor(route: string, subControllers: Controller[] = []) {
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
    buildPath(this);
  }
}
