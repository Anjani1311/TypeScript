class Shape {
    Area: number;
    constructor(area: number) {
      this.Area = area;
    }
  }
  class Circle extends Shape {
    display(): void {
      console.log('Area of the circle: ' + this.Area);
    }
  }
  var obj5 = new Circle(320);
  obj5.display();