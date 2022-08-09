//object 表示一个js对象
//一般不用这个类型 因为js里面什么都可以是对象
var a;
a = {};
a = function () {
};
//{} 用来指定对象中可以包含那些属性
//语法: {属性名:属性类型}
var b;
b = { name: 'Whcccc' };
//结构多了或者少了都不行
// b = {name: 'Whcccc', age: 18};
//? 表示属性是可选的
var c;
c = { name: 'Whcccc', age: 18 };
c = { name: 'Whcccc' };
//[propName:string] 表示任意字符串类型的属性名  :any 表示任意类型的值
//key =string value=any
var d;
d = { name: '啊啊啊啊', age: 18, gender: '男' };
//限制函数的结构  表示 e函数需要有两个number类型的函数 返回值也为number
var e;
e = function (a, b) {
    return a + b;
};
/**
 * 数组的类型声明
 *  类型[]
 *  Array<类型>
 */
//string[] 表示字符串数组
var f;
f = ['a', 'b', 'c'];
var g;
var h;
h = [1, 2, 3];
/**
 * 元组,就是固定长度的数组
 * 语法:[类型,类型,类型]
 */
var i; // 表示元组中只有两个string类型值
i = ['hello', 'world'];
/**
 * 枚举类型
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var j;
j = {
    name: 'aa',
    gender: Gender.Female
};
console.log(j.gender == Gender.Female);
