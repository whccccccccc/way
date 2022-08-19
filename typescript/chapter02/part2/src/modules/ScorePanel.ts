class ScorePanel {
    private score: number = 0;
    private _level: number = 1;

    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
    }

    addScore() {
        this.scoreElement.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this._level < this.maxLevel) {
            this.levelElement.innerHTML = ++this._level + '';
        }
    }


    get level(): number {
        return this._level;
    }
}

export default ScorePanel;
