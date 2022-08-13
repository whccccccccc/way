(function () {
    type myType = {
        name: string,
        age: number
    }

    /**
     * 接口用来定义一个类结构 用来定义一个类中应该包含那些属性和方法
     * 同时接口也可以当成类型声明去使用
     */
    interface myInterface {
        name: string,
        age: number
    }


    const obj: myType = {
        name: 'aaa',
        age: 111
    }

    //需要满足两个接口
    interface myInterface {
        gender: string
    }

    const obj1: myInterface = {
        name: 'aaa',
        age: 111,
        gender:'a'
    }
})();