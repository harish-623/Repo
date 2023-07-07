interface Ishape
{
    Area();
    Details();


}
class Circle implements Ishape{
    Area()
    {
        console.log('Area of circle');
    }
    Details() {
        console.log('Details of circle');
    }
}
class Triangle implements Ishape{
    Area() {
        console.log('Area of Triangle');

    }
    Details() {
        console.log("Details of triangle")
    }
}
let circle=new Circle();
circle.Area();
circle.Details();
let tri=new Triangle();
tri.Area();
tri.Details();