class Dog {
    name: string;
    age: number;

    bark() {
        alert(this.name + '汪汪汪')
    }

    // 构造函数/构造器/构造方法
    /**
     * 对象创建时调用
     * @param name
     * @param age
     */
    constructor(name: string, age: number) {
        //this 在实例方法中  this表示当前实例
        this.name = name;
        this.age = age;
    }
}


const d1 = new Dog('旺财', 3);
const d2 = new Dog('汉堡', 4);
d1.bark()
d2.bark()