// tsc 文件名 -w   w=watch  表示监控 不用每次修改代码后就编译  不适合开发 因为每一个文件都需要开一个命令行
// tsc  需要创建配置文件 编译当前目录下所有ts文件
// tsc -w 监控当前目录下所有文件
// import {hi} from './m.js';
let a: string;
a = "aaa";


// console.log(hi);
console.log(a);

function fn(this: any) {
    alert(this);// 必须指定this类型
}

let box = document.getElementById("box");
if (box != null) {
    box.addEventListener('click', function () {
        alert('hello');
    })
}
box?.addEventListener('click', function () {
    alert('hello');
})