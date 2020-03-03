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

// loop through each array of the 2d array grabbing each value we want from the correct     position
// grab the first three numbers from the first four arrays starting at posiotn 0 and        save them to respective new arrays
// iterate to the next position in first four arrays and save the next three            numbers into new arrays
// loop through the 2 - 5 arrays and starting at position 1 grab the value and push         into respective arrays
// starting with array 3 - 6 grab the first three numbers starting at position 0 and        push into respective arrays

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
  }

  let newArray = [];
  let arrayNumber = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newArray[arrayNumber] =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      arrayNumber++;
    }
  }
  // console.log(newArray);

  console.log(Math.max(...newArray));
}
