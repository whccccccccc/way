import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        //这里如果不绑定this  调用方会变成keydownHandler方法
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        //检查event.key的值是否合法
        //修改direction的属性
        this.direction = event.key;
    }

    //todo 未完成的 蛇不能立即掉头 蛇不能和身体相撞  食物刷新不能刷新到蛇身上
    run() {
        let x = this.snake.x;
        let y = this.snake.y;
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                x -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                x += 10;
                break;
        }
        this.checkEat(x, y)
        //检查蛇是否吃到了食物
        try {
            this.snake.x = x;
            this.snake.y = y;
        } catch (e: any) {
            alert(e.message + " GAME OVER");
            this.isLive = false;
        }

        //开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(x: number, y: number): void {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;