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
            console.log('main', stack[i].subControllers);
            if (stack[i].subControllers) {
                for (let x of stack[i].subControllers) {
                    console.log(x);
                }
            }
        }
        stack = currentStack;
    }
}
exports.buildPath = buildPath;
