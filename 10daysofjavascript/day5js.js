// DAY 5: INHERITANCE
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

// DAY 5: TEMPLATE LITERALS
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  // console.log(expressions[0])
  // console.log(expressions[1])
  let perim = expressions[1];
  let area = expressions[0];
  let s1 = (perim + Math.sqrt(perim * perim - 16 * area)) / 4;
  let s2 = (perim - Math.sqrt(perim * perim - 16 * area)) / 4;
  // console.log(s2);
  // console.log(s1);

  return [s2, s1];
}
