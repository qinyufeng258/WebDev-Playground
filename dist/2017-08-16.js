"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 2017年08月16日
 */
var numA = 10000;
var numB = 1342;
var numC = 11000;
var numD = 12442413;
var _ = require("lodash");
var testNums = [numA, numB, numC, numD];
function handleNumToTThsound(num) {
    return num > 9999 ? Math.floor(num / 1000) / 10 + "万" : num + "";
}
for (var _i = 0, testNums_1 = testNums; _i < testNums_1.length; _i++) {
    var num = testNums_1[_i];
    console.log("before:", num, " after:", handleNumToTThsound(num));
}
var arry = ["股票开户", "期贷开户", "基金定股", "我的股东户", "服务中心", "私人顾问", "股票分析", "华泰证券", "股票行情"];
var arry1 = ["股票开户", "期贷开户", "基金定股", "我的股东户", "服务中心", "股票分析", "股票行情"];
var arry2 = ["股票开户", "期贷开户", "私人顾问", "我的股东户"];
var arry3 = ["股票开户", "期贷开户", "基金定股", "股票行情"];
// method1
var arr3 = _.intersection(arry, arry1, arry2, arry3);
console.log(arr3);
// method2
/**
 * 传入一个以上的数组，返回这些数组中的相同值
 * @param arr
 * @param arrList
 */
function handleDifference(arrList) {
    var otherArrs = [];
    var arsLens = 0;
    for (var _i = 0, arrList_1 = arrList; _i < arrList_1.length; _i++) {
        var item = arrList_1[_i];
        otherArrs = otherArrs.concat(item);
        arsLens++;
    }
    var resultObj = Array.from(new Set(arr)).concat(otherArrs).reduce(function (accumulator, curVal) { return (accumulator[curVal] = accumulator[curVal] ? accumulator[curVal] + 1 : 1,
        accumulator); }, {});
    var resultArr = Object.keys(resultObj).reduce(function (accmulator, curVal) { return (resultObj[curVal] != arsLens ? "" : accmulator.push(curVal),
        accmulator); }, []);
    return resultArr;
}
//# sourceMappingURL=2017-08-16.js.map