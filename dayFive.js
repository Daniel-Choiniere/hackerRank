'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    var multi = 1;
    const n = parseInt(readLine(), 10);
    for (var i = 0; i < 10; i++) {
        var multiplied = n * multi;
        multi += 1;
        console.log(n + " x " + (multi - 1) + " = " + multiplied);
    }
    
} ;