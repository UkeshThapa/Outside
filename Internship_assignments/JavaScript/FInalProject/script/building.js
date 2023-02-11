class Building{
    constructor(canvas,blockWidth,blockHeight){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d"); 
        this.blockWidth = blockWidth;
        this.blockHeight = blockHeight;
        this.blockAngle = 2;
        this.stability = 0;
        this.buildingStore = [];
    }



    constructBuild(){
        for(let i=0; i<this.buildingStore.length;i++){
            if(this.buildingStore.length>4){
                let build = this.buildingStore[i]
                if(build.diff <= this.blockWidth/2){
                    this.stability +=2
                }
                console.log(this.stability)
                this.ctx.rect(build.x,build.y,this.blockWidth,this.blockHeight)        
            } 
            else{
                let build = this.buildingStore[i]
                this.ctx.rect(build.x,build.y,this.blockWidth,this.blockHeight)        
            }           
        }
    }


    

}
export{Building};