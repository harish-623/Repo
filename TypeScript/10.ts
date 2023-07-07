class Car{
    public color:string;
    constructor(color:string){
this.color=color;

    }
    
}
class Benz extends Car{
    public cost:number;
    constructor(color:string,cost:number)
    {
        super(color);
        this.cost=cost;

    }
    public Show()
    {
        console.log("color of the car:"+this.color);
        console.log("cost of the car :"+this.cost);


    }
}
let m=new Benz("white",100);
m.Show();