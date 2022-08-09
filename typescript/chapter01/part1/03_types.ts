let a: 10; //字面量 类似于 常量
a = 10;
// a = 11;
let b: "male" | "female"; //b可以赋值为 male 或者false
//联合类型
let c: boolean | string;
c = true;
c = "hello";

//任意类型  使用TS避免此种类型
let d: any;
d = 10;
d = 'hello';
d = true;
//声明变量 如果不指定类型,则TS解析器会自动判断变量的类型为any  (隐式的any)


//unknown 表示未知类型的值

let e: unknown;

e = 10;
e = "hello";
e = true;

let s: string;
//any类型的值可以赋值给任意类型的变量 所以会影响其他变量的类型检查
s = d;  //此处d是any

//unknown 实际上就是一个类型安全的any
//unknown类型的变量不能直接赋值给其他变量
if (typeof e === "string") {
    s = e;
}
//或者类型断言
s = e as string;

function fn(num): string | number {
    if (num) {
        return '字符串';
    } else {
        return 123;
    }
}

//空值 void undefined  以函数为例 用来表示没有返回值的函数
function fn1(num): void {
    return;//这种可以
}

//表示永远不会返回结果
function fn2(num): never {
    throw new Error('报错了!!!');
}