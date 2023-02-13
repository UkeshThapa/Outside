import{Block} from './block.js';
import { Building } from './building.js';

class Crane{
    constructor(canvas,canvasWidth,canvasHeight){
        // canvas 
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.canvasWidth=  canvasWidth;
        this.canvasHeight = canvasHeight;


        //   frame tracker
        this.frame = 0;
        
        // fall of block tracker
        this.fall = 0;
        
        this.gameStatus = 'start'


        // pendulum 
        this.gravity = 0.04;
        this.angle = (Math.PI)/8;
        this.angleAcceleration = 0;
        this.angleVelocity = 0;
        this.lengthOfWire = 230;
        
        // block of building
        this.blockWidth = 80;
        this.blockHeight = 80;
        

        // base of the building 
        this.baseX = 40;
        this.baseHeight = 40;
        this.baseY = this.canvasHeight-this.baseHeight;
        this.baseWidth = this.canvasWidth-(this.baseX*2);

        // CHECK THE KEY DOWN CONDITION
        this.statusCheck = "activate";

        // initilaize the building and block class 
        this.building = new Building(canvas,this.blockWidth,this.blockHeight);
        this.block = new Block(canvas,this.building);
    }
    

    drawImage(source,x,y,width,height){
        let img = new Image();
        let ctx = this.ctx;
        img.src = source;
        
        ctx.drawImage(img,x,y,width,height)

    }

    // update the force, angular velocity , angular acceleration
    update(){
        let force  = this.gravity * Math.sin(this.angle);
        this.angleAcceleration = (-1*force)/(this.lengthOfWire);
        this.angleVelocity = this.angleVelocity+this.angleAcceleration
        this.angle = this.angle + this.angleVelocity
    }

    createTowerStatus(){
        let ctx = this.ctx;

        this.drawImage("./assest/sky-building-design.png",0,40,40,60)
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`${this.building.buildingStore.length}`, 50,90);

    }

    createLifeStatus(){
        let ctx = this.ctx;

        this.drawImage("./assest/heart.png",350,10,30,30)
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`${3-this.fall}`, 390,36);
        this.drawImage("./assest/pause.png",405,2,50,50)
    }
    createScore(){
        let ctx = this.ctx;
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`score:${this.block.score}`, 0,36); 
    }
    // create the oscillation of the crane 
    create(){
        let ctx = this.ctx;

        this.createTowerStatus()
        this.createLifeStatus()
        this.createScore()
        this.stringX = this.lengthOfWire* Math.sin(this.angle) + (this.canvasWidth/2);
        this.stringY = this.lengthOfWire* Math.cos(this.angle);
        ctx.beginPath();
        ctx.moveTo(this.canvasWidth/2,0);
        ctx.lineTo(this.stringX, this.stringY);
        ctx.stroke();
        // this to always show the store of the building
        if(this.building.buildingStore.length > 0){
            this.building.constructBuild();
        }

        this.createbase()

        if(this.statusCheck == "activate"){
            this.blockAngle = -1 * this.angle;
            ctx.save();
            this.blockX = this.stringX-this.blockWidth/2;
            this.blockY = this.stringY+(this.blockWidth/2)*Math.tan(this.angle);
            ctx.translate(this.blockX,this.blockY);
            ctx.rotate(this.blockAngle);
            this.drawImage("./assest/base.png",0,0,this.blockWidth,this.blockHeight)

        }
        else if(this.statusCheck == "deactivate"){
            this.frame += 1;
            let blockPositionY = this.block.updateDrop(this.blockX,this.blockY,this.frame,this.blockAngle,this.blockWidth,this.blockHeight);
            let status = this.block.dropBlockStatus(this.blockX,blockPositionY,this.canvasHeight,this.baseHeight,this.blockWidth,this.blockHeight) 
         
            if(status == "detectCollision"){
                
                if(this.building.buildingStore.length > 3){
                    this.baseY = this.baseY+this.blockHeight;                    
                }

                this.statusCheck = "activate";
                this.frame = 0;
            }
         
            else if(status == "fallcondition"){
                this.fall+=1;
                if(this.fall===3){
                    this.fall = 0 
                    this.gameStatus = "end"
                }
                else if (this.fall <1){
                    this.gameStatus = "start"
                }
                this.gameStatus 
                console.log(this.fall)
                console.log(this.gameStatus)
                this.statusCheck = "activate";
                this.frame = 0;
            }

        }

        ctx.stroke();
    }
    
    OnClick(){
        document.addEventListener("keydown",(e)=>{
            let keyName = e.key;
            if(keyName == " "){
                this.statusCheck = "deactivate";
            }
        })
    }

    
    createbase(){
        let ctx = this.ctx;
        ctx.fillStyle = "#808080";
        ctx.fillRect(this.baseX,this.baseY,this.baseWidth,this.baseHeight)     
        ctx.stroke()   
    }

}
export {Crane}