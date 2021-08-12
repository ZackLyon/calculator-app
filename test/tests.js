import './example.test.js';
import { add, subtract, multiply, divide } from '../util.js';

const addTest = QUnit.test;
const subtractTest = QUnit.test;
const multiplyTest = QUnit.test;
const divideTest = QUnit.test;


addTest ('5 plus 3 = 8', (expectedSum) => {
    const expectSum = 8;
    const actualSum = add(5, 3);
    expectedSum.equal(expectSum, actualSum);
});
subtractTest ('5 minus 3 = 2', (expectedDiff) => {
    const expectDiff = 2;
    const actualDiff = subtract(5, 3);
    expectedDiff.equal(expectDiff, actualDiff);
});

multiplyTest ('5 times 3 = 15', (expectedQuot) => {
    const expectQuot = 15;
    const actualQuot = multiply(5, 3);
    expectedQuot.equal(expectQuot, actualQuot);
});

divideTest ('15 divided by 3 = 5', (expectedRemain) => {
    const expectRemain = 5;
    const actualRemain = divide(15, 3);
    expectedRemain.equal(expectRemain, actualRemain);
});

