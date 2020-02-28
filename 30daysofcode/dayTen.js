"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// we need to convert n to bianry equivalent
// we need to loop through the converted value
// checking to see if there are two ones in a row
// if there are two ones in a row we add to a counter
// return the counter

function main() {
  const n = parseInt(readLine(), 10);
  let binary = n.toString(2);
  // console.log(binary);

  let counter = 1;
  for (let i = 1; i < binary.length; i++) {
    if (binary[i - 1] == "1" && binary[i] == "1") {
      counter++;
    }
  }
  console.log(counter);
}
