import { Controller } from '../controllers/Controller';

export interface validController {
  route: string;
  subControllers?: Controller[];
  subPath?: string;
}

export interface handlers {
  subRoute: string;
  callback: (req: Request, res: Response) => void;
}
