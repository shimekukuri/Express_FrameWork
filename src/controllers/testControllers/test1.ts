import { Controller } from '../Controller';
import { Request, Response } from 'express';

export class TestController extends Controller {
  constructor() {
    super('/test');
  }

  get = (path: string) => {
    if (path[0] !== '/') {
      path = '/' + path;
    }
    return {
      path: path,
      handler: (req: Request, res: Response) => {
        res.send('hello');
      },
    };
  };
}
