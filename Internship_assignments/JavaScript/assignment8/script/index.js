
/* import class */

import {Game} from './game.js';


function main(){
    let canvas = document.getElementById("canvas")
    let game = new Game(canvas)
    game.crane.OnClick();
    game.OnClickToSTART();
    game.OnClickToPause();
    function setUpEnvironment(){
        game.gameStatus()   
            requestAnimationFrame (setUpEnvironment);
        }
    requestAnimationFrame(setUpEnvironment)   
}
main();