let numberA = 11;
let numberB = 31;

const sum = numberA + numberB;

console.log(`The sum is: ${sum}`);

const argvFirstElement = 2;
const argvLastElement = process.argv.length - 1;

let numbers = process.argv.splice(argvFirstElement, argvLastElement);

let sumArgvNumbers = numbers
                        .filter( value => Number(value) ? Number(value) : Number(0))
                        .reduce((previousValue, currentValue) =>
                        Number(previousValue) + Number(currentValue));

console.log(`The sum of argv's numbers is: ${sumArgvNumbers}`);
