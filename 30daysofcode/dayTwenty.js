function swap(x, y) {
  return [y, x];
}

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  // Write Your Code Here
  // console.log(n);
  // console.log(a);
  let numberOfSwaps = 0;

  for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal

    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        var temp1 = a[j];
        var temp2 = a[j + 1];
        a[j] = temp2;
        a[j + 1] = temp1;
        numberOfSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
  let first = a.shift();
  let last = a.pop();
  console.log(`First Element: ${first}`);
  console.log(`Last Element: ${last}`);
}
