class Bird {
    constructor(canvas,left,top,width,height){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d"); 
        this.x = left;
        this.y = top;
        this.speedX = 0;
        this.speedY = 0;
        this.gameStatus = 'start'
        this.birdWidth = width;
        this.birdHeight = height;    
        this.gravity = 0.02 ;  
        this.gravitySpeed = 0;  

    }
    

    // update the bird position 
    update(){
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + Math.floor(this.gravitySpeed);
        if(this.y >=500){
            this.y = 580-this.birdHeight; 
            this.gravitySpeed = 0;
            this.gameStatus = "end"
        }     
    }

    drawImage(ctx,posX,posY,width,height,source){
        let img = new Image();
        img.src = source;
        ctx.drawImage(img, posX,posY,width,height); /*(left,top,width,height)*/
        
    }


    // create the bird
    create(){
        let ctx = this.ctx;
        let source = "./assest/bird.png"    
        this.drawImage(ctx,this.x,this.y,this.birdWidth,this.birdHeight,source);       
    }

}
export{Bird};