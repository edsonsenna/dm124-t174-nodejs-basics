const BMIService = require('./bmi.service');

const decimalDigits = 2;
const height = 1.90;
const weight = 87;

const index = BMIService
    .getIndex(weight, height)
    .toFixed(decimalDigits);

console.log(`BMI is: ${index}`);
