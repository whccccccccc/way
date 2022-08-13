(function () {
    //抽象类 不可实例化
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log(`动物在叫`);
        }

        //必须被重写
        abstract getAge(): number;
    }

    class Dog extends Animal {
        sayHello() {
            console.log('wangwang');
        }

        getAge(): number {
            return 0;
        }
    }

    const dog = new Dog('旺财');
    dog.sayHello();
})();
