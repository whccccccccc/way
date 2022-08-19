/**
 * 在定义函数或是类时,如果遇到类型不明确就可以使用泛型
 * 用any并不能体现 传参和返回值时同一类型的
 */

function fn<T>(a: T): T {
    return a;
}

fn<string>('whc');


interface Inter {

    lengh: number;
}

//表示泛型T必须是Inter实现类
function fn2<T extends Inter>(a: T): number {
    return a.lengh;
}

fn2({'lengh': 6});


class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const myClass = new MyClass<string>('name');
