var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [12, 13, 14, 15];
var arr2 = [16, 17, 18, 19];
var copyarray = __spreadArray([], arr1, true);
console.log(copyarray);
var mergearray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(mergearray);
var newarr = __spreadArray(__spreadArray([], arr2, true), [20, 21, 22], false);
console.log(newarr);
