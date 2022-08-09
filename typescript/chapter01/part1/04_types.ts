//object 表示一个js对象
//一般不用这个类型 因为js里面什么都可以是对象
let a: object;
a = {};

a = function () {

};

//{} 用来指定对象中可以包含那些属性
//语法: {属性名:属性类型}
let b: { name: string };

b = {name: 'Whcccc'};
//结构多了或者少了都不行
// b = {name: 'Whcccc', age: 18};
//? 表示属性是可选的
let c: { name: string, age?: number };
c = {name: 'Whcccc', age: 18};
c = {name: 'Whcccc'};


//[propName:string] 表示任意字符串类型的属性名  :any 表示任意类型的值
//key =string value=any
let d: { name: string, [propName: string]: any };
d = {name: '啊啊啊啊', age: 18, gender: '男'};

//限制函数的结构  表示 e函数需要有两个number类型的函数 返回值也为number
let e: (a: number, b: number) => number

e = function (a, b) {
    return a + b;
}

/**
 * 数组的类型声明
 *  类型[]
 *  Array<类型>
 */
//string[] 表示字符串数组
let f: string[];
f = ['a', 'b', 'c'];

let g: number[];
let h: Array<number>;
h = [1, 2, 3];

/**
 * 元组,就是固定长度的数组
 * 语法:[类型,类型,类型]
 */

let i: [string, string];// 表示元组中只有两个string类型值
i = ['hello', 'world'];


/**
 * 枚举类型
 */

enum Gender {
    Male = 0,
    Female = 1
}

let j: { name: string, gender: Gender };
j = {
    name: 'aa',
    gender: Gender.Female
}
console.log(j.gender == Gender.Female)

//&表示同时  即是String 又是Number
let k: string & number;  //这么写没有意义
//这样写要求同时满足
let l: { name: string } & { age: number };

// l={name:'aaa'};//不行
l = {name: 'aaa', age: 18};


//类型的别名

type myType = 1 | 2 | 3 | 4 | 5;
let m: myType
let n: myType
let o: myType;