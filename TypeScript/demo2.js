"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo1_1 = require("./demo1");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.M = function () {
        var obj = new demo1_1.Calculator();
        obj.Add(1, 2);
    };
    return Test;
}());
var ob = new Test();
ob.M();
