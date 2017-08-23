/**
 * 2017年8月23日 
 */
// 长耗时任务
function* longRunningTask(value1) {
    let value2 = yield value1 + 1;
    console.log(value2);
    let value3 = yield value2 + 1;
    console.log(value3);
    let value4 = yield value3 + 1;
    console.log(value4);
    return value4;
}
// 自动化执行函数
function scheduler(task) {
    let taskObj = task.next(task.value);
    if (!taskObj.done) {
        task.value = taskObj.value;
        scheduler(task);
    }
}
//scheduler(longRunningTask(1));

function* func() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

function* iterEntries(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        yield [key, obj[key]];
    }
}

let myObj = {
    foo: '123',
    bar: '321'
};

for (let [key, value] of iterEntries(myObj)) {
    console.log(key, value);
}


function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}

let g = gen();
let result = g.next();

result.value.then((data) => {
    return data.json();
}).then((data) => {
    g.next(data);
});

