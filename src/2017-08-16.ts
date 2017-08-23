/**
 * 2017年08月16日
 */
let numA = 10000;
let numB = 1342;
let numC = 11000;
let numD = 12442413;
import * as _ from 'lodash';

let testNums = [numA, numB, numC, numD];

function handleNumToTThsound(num: number): string {
    return num > 9999 ? Math.floor(num / 1000) / 10 + "万" : num + "";
}

for (let num of testNums) {
    console.log("before:", num, " after:", handleNumToTThsound(num));
}

var arry = ["股票开户", "期贷开户", "基金定股", "我的股东户", "服务中心", "私人顾问", "股票分析", "华泰证券", "股票行情"];
var arry1 = ["股票开户", "期贷开户", "基金定股", "我的股东户", "服务中心", "股票分析", "股票行情"];
var arry2 = ["股票开户", "期贷开户", "私人顾问", "我的股东户"];
var arry3 = ["股票开户", "期贷开户", "基金定股", "股票行情"];

// method1
let arr3: Array<string> = _.intersection(arry, arry1, arry2, arry3);
console.log(arr3);

// method2
/**
 * 传入一个以上的数组，返回这些数组中的相同值
 * @param arr 
 * @param arrList
 */
function handleDifference(arrList: Array<Array<string>>): Array<string> {
    let otherArrs = [];
    let arsLens = 0;
    for (let item of arrList) {
        otherArrs = [...otherArrs, ...item];
        arsLens++;
    }

    let resultObj = [...Array.from(new Set(arr)), ...otherArrs].reduce((accumulator, curVal) => (
        accumulator[curVal] = accumulator[curVal] ? accumulator[curVal] + 1 : 1,
        accumulator
    ), {});

    let resultArr = Object.keys(resultObj).reduce((accmulator, curVal) => (
        resultObj[curVal] != arsLens ? "" : accmulator.push(curVal),
        accmulator
    ), []);

    return resultArr;

}



