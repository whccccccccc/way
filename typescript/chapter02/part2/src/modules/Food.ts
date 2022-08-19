import ScorePanel from "./ScorePanel";

class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    //获取食物坐标
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        //食物的位置最小是0 最大是 窗口-食物大小=290
        //蛇移动一次就是一格,一格的大小就是10,所以就要求食物的坐标必须是整10

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;
