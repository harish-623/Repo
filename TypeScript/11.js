var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.Area = function () {
        console.log('Area of circle');
    };
    Circle.prototype.Details = function () {
        console.log('Details of circle');
    };
    return Circle;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.Area = function () {
        console.log('Area of Triangle');
    };
    Triangle.prototype.Details = function () {
        console.log("Details of triangle");
    };
    return Triangle;
}());
var circle = new Circle();
circle.Area();
circle.Details();
var tri = new Triangle();
tri.Area();
tri.Details();
