class Pipe{
    constructor(canvas,canavsWidth){
        this.pipes = [];
        this.positionX =  canavsWidth;
        this.positionY = 0;
        this.pipeHeight = 300;
        this.pipeWidth = 80;
        this.maxPosition = -50;
        this.pipeGap = 180;
        this.speedOfPipe = 2;
        this.canvas = canvas;
        this.score = 0;
        this.gameStatus = "start";
        this.highscore = [];
    }
    
    
    update(frame,birdPositionX,birdPositionY,birdWidth,birdHeight){
        // check the frame value and push the value in the array named pipes
        let highscore = this.highscore
        if(frame%160 == 0){
            this.pipes.push({
                x: this.positionX,
            y:Math.floor(this.maxPosition * (Math.random()+1))
            })
        }

        for(let i=0;i<this.pipes.length;i++){
            let pipe = this.pipes[i];
            let bottomPositionY = pipe.y + this.pipeHeight + this.pipeGap; /*this help to calculate the next pipe position*/ 

            // for top pipe
            if(((birdPositionX+birdWidth)>pipe.x)&&((birdPositionX<pipe.x+this.pipeWidth))&&((birdPositionY+birdHeight>pipe.y))&&((birdPositionY<pipe.y+this.pipeHeight))){
                this.gameStatus = "end";
                highscore.push(this.score);
                
            }
            // for top pipe
            if(((birdPositionX+birdWidth)>pipe.x)&&((birdPositionX<pipe.x+this.pipeWidth))&&((birdPositionY+birdHeight>bottomPositionY))&&((birdPositionY<bottomPositionY+this.pipeHeight))){
                this.gameStatus = "end";
                highscore.push(this.score);
            }
        
            pipe.x -= this.speedOfPipe;
            if(pipe.x+this.pipeWidth<=0){
                this.pipes.shift()
                this.score += 1; 
            }
        }
    }

    displayScore(){
        let ctx =this.canvas.getContext("2d");
        ctx.font = "30px Verdana";
        ctx.fillStyle = "white"
        ctx.fillText(`Score : ${this.score}`,10,30)
    }

    // create image
    drawImage(ctx,posX,posY,width,height,source){

        let img = new Image();
        img.src = source;
        ctx.drawImage(img, posX,posY,width,height); /*(left,top,width,height)*/

    }


    // draw pipe function
    create(){
        let canvas = this.canvas;
        let ctx = canvas.getContext("2d");
        for(let i=0;i<this.pipes.length;i++){
            let p = this.pipes[i];
            let topPipePosition = p.y;
            let bottomPipePosition = p.y + this.pipeHeight + this.pipeGap; /*this help to calculate the next pipe position*/ 
            let src1 = './assest/pip_down.png'
            let src2 = './assest/pip_up.png'
            this.drawImage(ctx,p.x,topPipePosition,this.pipeWidth,this.pipeHeight,src1);
            this.drawImage(ctx,p.x,bottomPipePosition,this.pipeWidth,this.pipeHeight,src2);
        }
    }
}

export{Pipe};