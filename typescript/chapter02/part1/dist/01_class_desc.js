//类的简介
//class 定义
//俩个部分 属性 和 方法
class Person {
    constructor() {
        //定义实例属性
        this.name = 'A';
        this.age = 12;
    }
    //静态方法 或者类方法
    static sayHello() {
        console.log('Hello Static');
    }
}
//定义类(静态属性)
Person.commonAddress = '静态地址';
//定义只读属性 相当于Java的final  常量
Person.UnModify = '不可修改';
const person = new Person();
console.log(person);
console.log(Person.commonAddress);
console.log(Person.UnModify);
Person.sayHello();
//# sourceMappingURL=01_class_desc.js.map