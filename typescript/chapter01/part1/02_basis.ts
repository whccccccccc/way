//声明一个变量a,同时指定它的类型为number
let a: number;
//a 的类型设置为了number,在以后的使用过程中a的值只能是数字
a = 10;
// 因为这种写法js可以兼容
// a = 'hello'; //编译通过 但是会报错 类型固定为number
let b: string;
b = 'Hello';
//ts 可以编译成任意版本的js  可以确保代码有最好的兼容性 例如 es5 es6

//声明完变量直接进行赋值
//如果变量的声明和赋值是同时进行的,TS可以自动对变量进行类型检测
let c = false;
c = true;

//JS中的函数是不考虑参数的类型和个数的
function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(123, 456);//579  返回值number类型
// sum(123, "456");//123456 类型不对
// sum(123, 456,123213);//579  参数个数不对
