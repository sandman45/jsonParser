// const url = 'http://interview.plaid.com/plaid-first-round.txt';

// const request = require('request');
const fs = require('fs');
const _ = require('lodash');

function findValue(x, y, data) {
    let value = ' ';
    _.each(data, (d) => {
        if (x === parseFloat(d[0]) && y === parseFloat(d[1])) {
            value = String.fromCharCode(d[2]);
        }
    });
    return value;
}

fs.readFile('plaid-first-round.txt', 'utf8', (err, data) => {
    const finalData = [];

    const formattedData = data.split('\n');
    _.each(formattedData, (item) => {
        const itemVal = item.substr(1, item.length - 2);
        finalData.push(itemVal.split(','));
    });
    let finalArray = Array(100).fill().map(a => Array(100));
    let buffer = '';
    for (let i = 0; i < finalArray.length; i++) {
        for (let j = 0; j < 100; j++) {
            finalArray[i][j] = findValue(i, j, finalData);
            buffer += finalArray[i][j];
        }
        buffer += '\n';
    }
    console.log(buffer);

});
