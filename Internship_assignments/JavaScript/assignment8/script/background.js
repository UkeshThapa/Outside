class Environment{
    constructor(canvas){
        this.canvasWidth = 450;
        this.canvasHeight = 700;
        this.baseX = 40;
        this.baseHeight = 80;
        this.baseY = this.canvasHeight-this.baseHeight;
        this.baseWidth = this.canvasWidth-(this.baseX*2);
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }
    
    drawImage(source){
        let img = new Image();
        let ctx = this.ctx;
        img.src = source;
        
        ctx.drawImage(img,0,0,this.canvasWidth,this.canvasHeight)

    }

    create(){
        let canvas = this.canvas;
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        canvas.style.border = "2px solid red";
        this.drawImage("./assest/png.png")
    }


}

export{Environment}