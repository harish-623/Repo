class Student{
    sid:number;
    name:String;
    show()
    {
        console.log(`id:${this.sid} name:${this.name}`);

    }
}
let student =new Student();
student.sid=1;
student.name='harish';
student.show();
let s= new Student();
s.sid=2;
s.name='virat';
s.show();