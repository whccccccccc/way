(function () {
    //写这个函数是因为呀避免重名
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log(`${this.name}在叫`);
        }
    }

    class Dog extends Animal {
        sayHello() {
            console.log(`${this.name}汪汪汪`);
        }

        run() {
            console.log(`${this.name}在跑`);
        }
    }

    class Cat extends Animal {
    }

    const dog = new Dog('旺财', 3);
    const cat = new Cat('咪咪', 3);
    dog.sayHello();
    dog.run();
    cat.sayHello();
})();
