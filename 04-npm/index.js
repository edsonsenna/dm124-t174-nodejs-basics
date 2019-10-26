const chalk = require('chalk');
const string = require('useful-string');

const names = [
    'Edson de Senna Júnior',
    'Filipe Henrique Benjamin',
    'Mário Guilherme Macedo',
    'André Luiz Oneti Carvalho'
]

const print = (name, index) => {
    const colors = ['blue', 'yellow', 'green', 'red'];
    const colorIndex = index % colors.length;
    const colorPicked = colors[colorIndex];
    console.log(chalk.default[colorPicked](name));
}

names
    .sort()
    .map(string.hyphenate)
    .forEach(print);
