//enum
var Week;
(function (Week) {
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 29] = "Fri";
    Week[Week["Sat"] = 30] = "Sat";
    Week[Week["Sun"] = 31] = "Sun";
})(Week || (Week = {}));
console.log(Week.Fri);
