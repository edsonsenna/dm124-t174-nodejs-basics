let numberA = 11;
let numberB = 31;

const sum = numberA + numberB;

console.log(`The sum is: ${sum}`);

const argvFirstElement = 2;
const argvLastElement = process.argv.length - 1;

let numbers = process.argv.splice(argvFirstElement, argvLastElement);

let isNumber = number => Number(number) ? Number(number) : Number(0);
let justNumbers = value => isNumber(value);
let sumNumbers = (previousValue, currentValue) => ( Number(previousValue) + Number(currentValue) );

let sumArgvNumbers = numbers
                        .filter(justNumbers)
                        .reduce(sumNumbers, 0);

console.log(`The sum of argv's numbers is: ${sumArgvNumbers}`);
