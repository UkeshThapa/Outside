// import class
import {Environment} from './background.js';
import {Crane} from './crane.js';


class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.gamestatus = 'notstart'; 
        this.background = new Environment(canvas);
        this.crane = new Crane(canvas,this.background.canvasWidth,this.background.canvasHeight)
        this.frame = 0;
        this.highscore =[]
    }

    gameStatus(){
        let crane = this.crane;
        if(this.gamestatus == "notstart" ){
            this.gameStartPage()
        }
        
        else if(this.gamestatus == 'start'){
            this.gameInitialization()
            this.gamestatus = crane.gameStatus 
        }
        
        else if(this.gamestatus == 'pause'){
            this.gamePause()
        }
        else if(this.gamestatus == "end"){
            this.gameOver();
            
        }
    }

    

    drawImage(source,x,y,width,height){
        let img = new Image();
        let ctx = this.ctx;
        img.src = source; 
        ctx.drawImage(img,x,y,width,height)

    }


    gameStartPage(){
        this.frame +=1
        let background = this.background
        background.create()
        this.drawImage("./assest/banner.png",40,190,400,200)
        this.drawImage("./assest/start.png",90,300,250,250)
        this.drawImage("./assest/pointer.png",280,420,100,100)

    }
    
    gameInitialization(){

        this.update();
        this.create();
    }
    
    gameOver(){
        // let sound = new Audio('./assest/gameover.mp3')
        // sound.play()
        let ctx = this.ctx
        let crane = this.crane
        let score = crane.block.score
        let highscore = this.highscore
        highscore.push(crane.block.score)
        crane.gameStatus = "start"
        console.log(crane.block.score)
        let background = this.background
        background.create()
        this.drawImage("./assest/gameOver.png",20,0,400,400)
        this.drawImage("./assest/tryagain.png",190,300,60,60)
        ctx.font = "bold 40px Arial";   
        ctx.fillText(`Score : ${score}`,150,400);
        ctx.fillText(`Highest Score : ${Math.max(...highscore)}`,60,450);
        crane.building.buildingStore = []

    }
    
    gamePause(){
        let background = this.background
        background.create()
        this.drawImage("./assest/play.png",90,300,250,300)

        
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

    OnClickToSTART(){
        let crane = this.crane;
        let canvas = this.canvas
        canvas.addEventListener("click",(e)=>{
            let x = e.layerX - canvas.offsetLeft;
            let y = e.layerY  - canvas.offsetTop;
            if (x>=90 && x<=340 && y>=300 && y<=550){
                this.gamestatus = "start"
                crane.block.score = 0

            } 
        })
    } 
    OnClickToPause(){
        let canvas = this.canvas
        canvas.addEventListener("click",(e)=>{
            let x = e.layerX - canvas.offsetLeft;
            let y = e.layerY  - canvas.offsetTop;
            if (x>=405 && x<=455 && y>=2 && y<=52){
                this.gamestatus = "pause"
            } 
        })
    }

}

export{Game};