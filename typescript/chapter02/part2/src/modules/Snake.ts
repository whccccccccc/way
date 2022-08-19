class Snake {
    //蛇头
    head: HTMLElement;
    //蛇的身体 包括社团
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div")! as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get x() {
        return this.head.offsetLeft;
    }

    get y() {
        return this.head.offsetTop;
    }

    set x(value: number) {
        if (this.x === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }
        this.moveBody()
        this.head.style.left = value + 'px';
    }

    set y(value: number) {
        if (this.y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }
        this.moveBody()
        this.head.style.top = value + 'px';
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}

export default Snake;