var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.show = function () {
        console.log("id:".concat(this.sid, " name:").concat(this.name));
    };
    return Student;
}());
var student = new Student();
student.sid = 1;
student.name = 'harish';
student.show();
var s = new Student();
s.sid = 2;
s.name = 'virat';
s.show();
