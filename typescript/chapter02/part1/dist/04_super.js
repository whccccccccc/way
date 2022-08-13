(function () {
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
            //super=父类  ts的面向对象和Java很像
            super.sayHello();
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
})();
//# sourceMappingURL=04_super.js.map