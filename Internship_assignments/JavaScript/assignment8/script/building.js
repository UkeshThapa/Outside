class Building{
    constructor(canvas,blockWidth,blockHeight){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d"); 
        this.blockWidth = blockWidth;
        this.blockHeight = blockHeight;
        this.blockAngle = 10;
        this.stability = 0;
        this.buildingStore = [];
        this.frame = 0
    }

    drawImage(source,x,y){
        let img = new Image();
        let ctx = this.ctx;
        img.src = source;
        ctx.drawImage(img,x,y,this.blockWidth,this.blockHeight)

    }

    constructBuild(){
        this.frame+=1
        for(let i=0; i<this.buildingStore.length;i++){
                if(this.buildingStore.length>2){
                    let build = this.buildingStore[i]
                    if(build.update == "newstore"){
                        this.stability = this.stability +(build.direction)* (this.blockAngle);
                        build.DisplayX = build.x;
                        build.reachStatus = "notreached";
                        build.update = "oldstore";
                        build.movingStatus = "moving"
                    }
                    else if(build.update == "oldstore"){
                        if(this.stability < 0){
                            build.angleOfDeflect = build.x + this.stability
                            console.log(build.angleOfDeflect)
                            if(build.reachStatus == "notreached"){
                                // control the frame
                                if(this.frame%10 ==0){
                                    build.DisplayX -=1;
                                }
                                if(build.DisplayX == build.angleOfDeflect){
                                    build.reachStatus = "reached";
                                }
                                this.drawImage("./assest/base.png",build.DisplayX,build.y)
                            }
                            else if(build.reachStatus == "reached"){
                                if(this.frame%10 ==0){
                                    build.DisplayX +=1;
                                }
                                if(build.DisplayX == build.x){
                                    build.reachStatus = "notreached";
                                }
                                this.drawImage("./assest/base.png",build.DisplayX,build.y)
                            }

                        }
                        else if(this.stability > 0){
                            console.log("right")
                        }
                        else if(this.stability == 0){
                            console.log("stable")
                            this.drawImage("./assest/base.png",build.x,build.y)
                        }
                    }
                }
                else{
                    let build = this.buildingStore[i]
                    this.drawImage("./assest/base.png",build.x,build.y)
                }
        }
    }


    

}
export{Building};