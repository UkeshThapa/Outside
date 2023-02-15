
class Block{
    constructor(canvas,building){
        this.canvas = canvas;
        this.building = building;
        this.ctx = canvas.getContext("2d");
        this.gravity = 2;
        this.scorePrefectbuild = 10;

        this.score = 0;
    }

    drawImage(source,blockWidth,blockHeight){
        let img = new Image();
        let ctx = this.ctx;
        img.src = source;
        ctx.drawImage(img,0,0,blockWidth,blockHeight)

    }
    updateDrop(blockX,blockY,frame,blockAngle,blockWidth,blockHeight){
        this.blockX = blockX;
        this.blockY = blockY+frame*this.gravity;
        let ctx = this.ctx;
        ctx.save();
        ctx.translate(this.blockX,this.blockY);
        ctx.rotate(blockAngle)
        this.drawImage("./assest/base.png",blockWidth,blockHeight)
        return this.blockY;
    }

    dropBlockStatus(blockX,blockY,canvasHeight,baseHeight,blockWidth,blockHeight){
    
        // condition when first build is made
    
        if(this.building.buildingStore.length == 0){
            if(blockY >= canvasHeight-blockHeight-baseHeight){
                this.building.buildingStore.push({
                    x : blockX,
                    y : canvasHeight-blockHeight-baseHeight,
                    direction : 1
                })
                return "detectCollision";
            }
            this.score = 10
        }


        else if(this.building.buildingStore.length > 0){
        }
        for(let i =0;i<this.building.buildingStore.length;i++){
            let build = this.building.buildingStore[this.building.buildingStore.length-1];
            
            if(blockY+blockHeight>=build.y){
                if("movingStatus" in build){
                    if((blockX+blockWidth >= build.x)&&(blockX<= build.x+blockWidth)){          
                        // check the condition for the block if the distance is greater than halfor equal to the blockwidth
                        if(Math.abs(blockX-(build.x))<=(blockWidth/2)){
                            
                            //update the block position y after certain block 
                            if(this.building.buildingStore.length>2){
                                for(let j =0;j<this.building.buildingStore.length;j++){
                                    let build = this.building.buildingStore[j];
                                    build.y = build.y + blockHeight
                                }
                            }                            
                            // score
                            if(Math.abs(build.x-blockX)==0){
                                this.score = this.score + 20
                            } 
                            else if(Math.abs(build.x-blockX)<5){
                                this.score = this.score + 15
                            } 
                            else if(Math.abs(build.x-blockX)>15){
                                this.score = this.score + 5
                            } 

                            // update the new position of the X and Y co-ordinate in the array


                        if(blockX<build.x){
                            this.building.buildingStore.push({
                                x : blockX,
                                y : build.y-blockHeight,
                                direction : -1,
                                diff : build.x-blockX,
                                update : "newstore"
                            })
                        }
                        if(blockX>build.x){
                            this.building.buildingStore.push({
                                x : blockX,
                                y : build.y-blockHeight,
                                direction : 1,
                                diff : blockX-build.x,
                                update : "newstore"
                            })
                        }



                        return "detectCollision";
                        }

                        else{
                            return "fallcondition"
                        }

                    }
                    else{
                        return "fallcondition"
                    }
                }
                else{ 
                    if((blockX+blockWidth >= build.x)&&(blockX<= build.x+blockWidth)){          
                        // check the condition for the block if the distance is greater than halfor equal to the blockwidth
                        if(Math.abs(blockX-(build.x))<=(blockWidth/2)){
                        
                            //update the block position y after certain block 
                            if(this.building.buildingStore.length>2){
                                for(let j =0;j<this.building.buildingStore.length;j++){
                                    let build = this.building.buildingStore[j];
                                    build.y = build.y + blockHeight
                                }
                            }                            
                            
                            // score
                            if(Math.abs(build.x-blockX)==0){
                                this.score = this.score + 20
                            } 
                            else if(Math.abs(build.x-blockX)<5){
                                this.score = this.score + 15
                            } 
                            else if(Math.abs(build.x-blockX)>15){
                                this.score = this.score + 5
                            } 

                            // update the new position of the X and Y co-ordinate in the array


                        if(blockX<build.x){
                            this.building.buildingStore.push({
                                x : blockX,
                                y : build.y-blockHeight,
                                direction : -1,
                                diff : build.x-blockX,
                                update : "newstore"
                            })
                        }
                        if(blockX>build.x){
                            this.building.buildingStore.push({
                                x : blockX,
                                y : build.y-blockHeight,
                                direction : 1,
                                diff : blockX-build.x,
                                update : "newstore"
                            })
                        }



                        return "detectCollision";
                        }

                        else{
                            return "fallcondition"
                        }

                    }
                    else{
                        return "fallcondition"
                    }
                }                    
                }
            }
        }
    }

export {Block};