let numberA = 11;
let numberB = 31;

const sum = numberA + numberB;

console.log(`The sum is: ${ sum }`);

const argvFirstElement = 2;
const argvLastElement = process.argv.length - 1;

let numbers = process.argv.splice(argvFirstElement, argvLastElement);

let sumNumbers = numbers
                .reduce((previousValue, currentValue) => parseInt(previousValue)+parseInt(currentValue));

console.log(`The sum is: ${ sumNumbers }`);
