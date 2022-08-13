(function () {
    //抽象类 不可实例化
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log(`动物在叫`);
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('wangwang');
        }
        getAge() {
            return 0;
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
})();
//# sourceMappingURL=05_abstract.js.map