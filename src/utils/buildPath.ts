import { validController } from '../controllers/interfaces';
import { AppRouter } from '../AppRouter/AppRouter';

export function buildPath(node: validController): void {
  let stack = [node];
  const map = new Map();
  let currentStack: validController[] = [];

  while (stack) {
    currentStack;
    for (let i = 0; i < stack.length; i++) {
      console.log('main', stack[0], 'route', stack[0].route);
      console.log('sub', stack[i].subControllers, 'route', stack[i].route);
      if (stack[i].subControllers) {
        for (let x of stack[i].subControllers!) {
          console.log('sub sub', x, 'route', x.route);
        }
      }
    }
    stack = currentStack;
  }
}
