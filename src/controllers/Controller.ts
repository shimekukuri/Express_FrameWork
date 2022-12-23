import { buildPath } from '../utils/buildPath';

export class Controller {
  route: string;
  subControllers?: Controller[];
  subPath?: string;

  constructor(route: string, subControllers: Controller[] = []) {
    this.subControllers = subControllers;
    this.route = route;
  }
  updateRoute(path: string = ''): void {
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
