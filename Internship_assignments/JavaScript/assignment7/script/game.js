import {Environment} from './background.js';
import {Bird} from './bird.js';
import {Pipe} from './pipe.js';


class Game{
    constructor(canvas){
        
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.birdWidth = 60;
        this.birdHeight = 50;
        this.birdPositionX = 180;
        this.birdPositionY = 250;
        this.gameStatus = 'start';
        this.background = new Environment(canvas);
        this.bird = new Bird(canvas,this.birdPositionX,this.birdPositionY,this.birdWidth,this.birdHeight)
        this.pipe = new Pipe(canvas,this.background.canvasWidth)

    }

    
    update(frame){
        let bird= this.bird;
        let pipe = this.pipe;
        
        bird.update();
        pipe.update(frame,this.birdPositionX,bird.y,this.birdWidth,this.birdHeight);
        this.updateStatus()
    }

    updateStatus(){
        let bird = this.bird;
        let pipe = this.pipe;
        if((pipe.gameStatus == 'end')||(bird.gameStatus == 'end')){
            this.gameStatus = 'end';
        }
    }
    
    
    create(){
        let background = this.background;
        let bird = this.bird;
        let pipe = this.pipe;

        background.create() 
        bird.create()
        pipe.create()
        background.drawTrack() 
        pipe.displayScore()
    }



    gameInitialization(frame){
        this.update(frame);
        this.create();
    }
    
    
    drawImages(source,x,y,width,height){
        let ctx = this.ctx;
        let img = new Image();
        img.src = source;
        ctx.drawImage(img,x,y,width,height)

        
    }



    gameOver(){

        let pipe = this.pipe;
        let ctx = this.ctx;
        canvas.width = 400;
        canvas.height  = 650;
        // images 
        let src1 = "./assest/background-night.png";
        this.drawImages(src1,0,0,400,650)
        let src2 = "./assest/gameover.png"
        this.drawImages(src2,60,180,280,80)
        
        // fill text
        ctx.font = "30px Verdana";
        ctx.fillStyle = "white"
        ctx.fillText(`Your Score : ${pipe.score}`,90,330)
        ctx.fillText(`Click to Restart`,90,390)

    }


    checkKeydown(){
        let bird= this.bird;
        document.addEventListener("keydown",function(e){
            let keyName = e.key  

            if(keyName == " "){
                bird.gravitySpeed = 0;
                bird.y = bird.y - 40;

            }
        })
    }

}

export{Game};