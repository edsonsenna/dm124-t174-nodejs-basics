const fs = require('fs');

function printFileContent(err , data) {
    if(err) {
        console.log('Error opening file...', err);
        return;
    }

    console.log(data);
}

fs.readFile('./studentss.txt', 'utf8', printFileContent);
console.log('Is it not done yet?');