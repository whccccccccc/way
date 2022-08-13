//类的简介
//class 定义
//俩个部分 属性 和 方法

class Person {
    //定义实例属性
    name: string = 'A'
    age: number = 12
    //定义类(静态属性)
    static commonAddress: string = '静态地址'
    //定义只读属性 相当于Java的final  常量
    static readonly UnModify: string = '不可修改';
    //静态方法 或者类方法
    static sayHello(): void {
        console.log('Hello Static')
    }
}





const person = new Person();
console.log(person)
console.log(Person.commonAddress)
console.log(Person.UnModify)
Person.sayHello()
