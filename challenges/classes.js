// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(params){
        this.lengtH=params.lengtH;
        this.width=params.width;
        this.height=params.height;
    }
    volume(params){
        return (this.lengtH*this.height*this.width)
    }
    surfaceArea(params){
        return 2*(this.lengtH*this.width+this.lengtH*this.height+this.width*this.height)  
    }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.