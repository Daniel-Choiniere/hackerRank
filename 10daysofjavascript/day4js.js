// DAY 4 PROBLEM #1
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  // console.log(objects[0].x)
  let total = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      total++;
    }
  }
  return total;
}

// DAY 4 PROBLEM #2
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    let total = 0;
    this.sides.forEach((measurement) => {
      total += measurement;
    });
    return total;
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
