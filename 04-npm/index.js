const chalk = require('chalk');
const string = require('useful-string');

const names = [
    'Edson de Senna Júnior',
    'Filipe Henrique Benjamin',
    'Mário Guilherme Macedo',
    'André Luiz Oneti Carvalho'
]

const print = (name, index) => {
    console.log(chalk.default[index % 2 === 0 ? 'blue' : 'yellow'](name));
}

names
    .sort()
    .map(string.hyphenate)
    .forEach(print);
