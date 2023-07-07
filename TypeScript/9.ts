class Customer{
    customerId:number;
    customerName:string;
    public constructor(customerId:number,customerName:string)
    {
        this.customerId=customerId;

        this.customerName=customerName;
    }
    public Detail()
    {
        console.log(`ID:${this.customerId} Name:${this.customerName}`);
    }
}
let obj:Customer=new Customer(12,"Harish");
obj.Detail();
