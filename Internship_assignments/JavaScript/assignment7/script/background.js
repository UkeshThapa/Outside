 class Environment{
    constructor(canvas){
        this.canvasHeight = 650;
        this.canvasWidth = 500;
        this.gap = 200;
        this.canvas = canvas;
        this.ctx  = canvas.getContext("2d");
        this.trackPositionY = 580;
        this.trackHeight = 80;
        this.obstacelWidth = this.canvasWidth-50;
        this.pipe = [];
    }

    drawImage(source){
        let img = new Image();
        let ctx = this.ctx;
        img.src = source;
        ctx.drawImage(img,0,0,this.canvasWidth,this.canvasHeight)

    }

    // draw track
    drawTrack(){
        let ctx = this.ctx;
        let img = new Image();
        img.src = "./assest/base.png";
        ctx.drawImage(img, 0,this.trackPositionY,this.canvasWidth,this.trackHeight); /*(left,top,width,height)*/
        
    }
    


    create(){
        let canvas = this.canvas;
        canvas.width = this.canvasWidth;
        canvas.height  = this.canvasHeight;
        canvas.style.border = "2px solid red";
        this.drawImage("./assest/background-night.png");

    }



    
}

export{Environment};