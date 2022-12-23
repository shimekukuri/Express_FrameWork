import { Controller } from '../controllers/Controller';

export interface validController {
  route: string;
  subControllers?: Controller[];
  subPath?: string;
}
