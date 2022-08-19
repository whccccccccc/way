(function () {
    class Person {
        //TS可以在属性前添加属性的修饰符
        /**
         * public 可以在任意位置访问或修改  默认值
         * private 私有属性只能在类内部进行访问  添加方法可以对外暴露
         * protected 受保护的属性 只能在当前类和子类中可访问
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         * get set 方法
         * 属性的存取器
         */

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value;
        }
    }

    const person = new Person('aaa', 18)

    /**
     * 现在属性是在对象中设置的,属性可以任意的被修改
     * 属性可以任意被修改将会导致对线中的数据变得非常不安全
     */


    class C {

        constructor(public name: string, public age: number) {
        }
    }
    //
    // class C {
    //     public name: string;
    //     public age: number;
    //
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }


})();