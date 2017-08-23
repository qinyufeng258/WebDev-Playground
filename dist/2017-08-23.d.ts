/**
 * 2017年8月23日
 */
declare function longRunningTask(value1: any): IterableIterator<any>;
declare function scheduler(task: any): void;
declare function func(): IterableIterator<1 | 2 | 3 | 4>;
declare function iterEntries(obj: any): IterableIterator<any[]>;
declare let myObj: {
    foo: string;
    bar: string;
};
declare function gen(): IterableIterator<Promise<Response>>;
declare let g: IterableIterator<Promise<Response>>;
declare let result: IteratorResult<Promise<Response>>;
