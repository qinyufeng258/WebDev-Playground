var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 2017年8月23日
 */
// 长耗时任务
function longRunningTask(value1) {
    var value2, value3, value4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, value1 + 1];
            case 1:
                value2 = _a.sent();
                console.log(value2);
                return [4 /*yield*/, value2 + 1];
            case 2:
                value3 = _a.sent();
                console.log(value3);
                return [4 /*yield*/, value3 + 1];
            case 3:
                value4 = _a.sent();
                console.log(value4);
                return [2 /*return*/, value4];
        }
    });
}
// 自动化执行函数
function scheduler(task) {
    var taskObj = task.next(task.value);
    if (!taskObj.done) {
        task.value = taskObj.value;
        scheduler(task);
    }
}
//scheduler(longRunningTask(1));
function func() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/, 4];
        }
    });
}
function iterEntries(obj) {
    var keys, i, key;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                keys = Object.keys(obj);
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < keys.length)) return [3 /*break*/, 4];
                key = keys[i];
                return [4 /*yield*/, [key, obj[key]]];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var myObj = {
    foo: '123',
    bar: '321'
};
for (var _i = 0, _a = iterEntries(myObj); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key, value);
}
function gen() {
    var url, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = 'https://api.github.com/users/github';
                return [4 /*yield*/, fetch(url)];
            case 1:
                result = _a.sent();
                console.log(result.bio);
                return [2 /*return*/];
        }
    });
}
var g = gen();
var result = g.next();
result.value.then(function (data) {
    return data.json();
}).then(function (data) {
    g.next(data);
});
//# sourceMappingURL=2017-08-23.js.map