var Customer = /** @class */ (function () {
    function Customer(customerId, customerName) {
        this.customerId = customerId;
        this.customerName = customerName;
    }
    Customer.prototype.Detail = function () {
        console.log("ID:".concat(this.customerId, " Name:").concat(this.customerName));
    };
    return Customer;
}());
var obj = new Customer(12, "Harish");
obj.Detail();
