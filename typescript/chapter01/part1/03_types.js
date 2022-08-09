var a; //字面量 类似于 常量
a = 10;
// a = 11;
var b; //b可以赋值为 male 或者false
//联合类型
var c;
c = true;
c = "hello";
//任意类型  使用TS避免此种类型
var d;
d = 10;
d = 'hello';
d = true;
//声明变量 如果不指定类型,则TS解析器会自动判断变量的类型为any  (隐式的any)
//unknown 表示未知类型的值
var e;
e = 10;
e = "hello";
e = true;
var s;
//any类型的值可以赋值给任意类型的变量 所以会影响其他变量的类型检查
s = d;
//unknown 实际上就是一个类型安全的any
//unknown类型的变量不能直接赋值给其他变量
if (typeof e === "string") {
    s = e;
}
//或者类型断言
s = e;
function fn(num) {
    if (num) {
        return '字符串';
    }
    else {
        return 123;
    }
}
//没有返回值
function fn1(num) {
    return; //这种可以
}
