require(`!style-loader!css-loader!less-loader!./style/index.less`)

import GameControl from './modules/GameControl';

const gameControl = new GameControl();
setInterval(() => {
    console.log(gameControl.direction)
}, 1000);