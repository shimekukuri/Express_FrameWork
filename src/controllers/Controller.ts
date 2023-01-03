import { buildPath } from '../utils/buildPath';
import { handlers } from './interfaces';
import { handlerEnum } from '../handlers/handlerEnums';

export class Controller {
  route: string;
  subControllers?: Controller[];
  subPath?: string;
  handlers: handlers[];

  constructor(route: string, subControllers: Controller[] = []) {
    this.subControllers = subControllers;
    this.route = route;
    this.handlers = [];
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

  Get(
    subRoute: string = '/',
    callback: (req: Request, res: Response) => void
  ): void {
    this.handlers.push({ subRoute, callback });
  }
}
