// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    let count = 0;
    this.array.forEach(side => (count += side));
    return count;
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.countSides === 3 ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    let equalSides = this.perimeter / 4;
    return equalSides == this.array[0] ? true : false;
  }

  get area() {
    let side = this.perimeter / 4;
    return side * side;
  }
}
