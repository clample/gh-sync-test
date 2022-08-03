import { myNum } from './myHelper.mjs';

if (myNum !== 2) {
    throw new Error();
}

console.log('IT WORKS, got ', myNum);