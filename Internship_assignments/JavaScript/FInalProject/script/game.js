// import class
import {Environment} from './background.js';
import {Crane} from './crane.js';


class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.gamestatus = 'notStart'; 
        this.background = new Environment(canvas);
        this.crane = new Crane(canvas,this.background.canvasWidth,this.background.canvasHeight)

    }

    gameStatus(){
        let gameStatus = this.gamestatus;
        if(gameStatus == "notStart" ){
            this.gameStartPage()
        }
        else if(gameStatus == 'start'){
            this.gameInitialization()
        }
        else if(gameStatus == "end"){
            this.game = 'end';
            this.gameOver();
        }
    }

    gameStartPage(){
        this.gamestatus = "start"
    }

    gameInitialization(){
        this.update();
        this.create();
    }

    gameOver(){
        this.gamestatus = "start"
    }

    update(){
        let crane = this.crane;

        crane.update()
    }
    create(){
        let background = this.background
        let crane = this.crane;
        background.create()
        crane.create()

    }
}

export{Game};