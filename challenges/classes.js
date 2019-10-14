// 1. Copy and paste your prototype in here and refactor into class syntax.

class NewCuboidMaker {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}  

const newCuboid = new NewCuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker {
    constructor(cubeAttrs) {
        super(cubeAttrs);
    }
    volumeForCube() {
        return this.length * this.length * this.length;
    }
    surfaceAreaForCube() {
        return 6 * this.length * this.length;
    }      
}

const newCube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4,
  });

console.log(newCube.volume());
console.log(newCube.surfaceArea());