(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * get set 方法
         * 属性的存取器
         */
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const person = new Person('aaa', 18);
    /**
     * 现在属性是在对象中设置的,属性可以任意的被修改
     * 属性可以任意被修改将会导致对线中的数据变得非常不安全
     */
})();
//# sourceMappingURL=07_fengzhuang.js.map