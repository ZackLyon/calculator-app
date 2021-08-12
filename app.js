// import functions and grab DOM elements
import { add, subtract, multiply, divide } from './util.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');
const numOne = document.getElementById('num-one');
const numTwo = document.getElementById('num-two');
const output = document.getElementById('output');
const operator = document.getElementById('operator');
const addCount = document.getElementById('add-count');
const subtractCount = document.getElementById('subtract-count');
const multiplyCount = document.getElementById('multiply-count');
const divideCount = document.getElementById('divide-count');
let timesAdded = 0;
let timesSubtracted = 0;
let timesMultiplied = 0;
let timesDivided = 0;

addBtn.addEventListener('click', () => {
    output.textContent = add(numOne.value, numTwo.value);
    operator.textContent = '+';
    timesAdded++;
    addCount.textContent = timesAdded;
});

subtractBtn.addEventListener('click', () => {
    output.textContent = subtract(numOne.value, numTwo.value);
    operator.textContent = '-';
    timesSubtracted++;
    subtractCount.textContent = timesSubtracted;
});

multiplyBtn.addEventListener('click', () => {
    output.textContent = multiply(numOne.value, numTwo.value);
    operator.textContent = '*';
    timesMultiplied++;
    multiplyCount.textContent = timesMultiplied;
});

divideBtn.addEventListener('click', () => {
    output.textContent = divide(numOne.value, numTwo.value);
    operator.textContent = '/';
    timesDivided++;
    divideCount.textContent = timesDivided;
});
