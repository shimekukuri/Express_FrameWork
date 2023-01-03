"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPath = void 0;
function buildPath(node) {
    let stack = [node];
    const map = new Map();
    let currentStack = [];
    while (stack) {
        currentStack;
        for (let i = 0; i < stack.length; i++) {
            console.log('main', stack[0], 'route', stack[0].route);
            console.log('sub', stack[i].subControllers, 'route', stack[i].route);
            if (stack[i].subControllers) {
                for (let x of stack[i].subControllers) {
                    console.log('sub sub', x, 'route', x.route);
                }
            }
        }
        stack = currentStack;
    }
}
exports.buildPath = buildPath;
