let numbers = process.argv;

let justNumbers = number => !!Number(number);
let sumNumbers = (previousValue, currentValue) => ( Number(previousValue) + Number(currentValue) );

let sumArgvNumbers = numbers
                        .filter(justNumbers)
                        .reduce(sumNumbers, 0);

console.log(`The sum of argv's numbers is: ${sumArgvNumbers}`);
