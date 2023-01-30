const widthOfCanvas = 500;
const heightOfCanvas = 500;
const widthOfImg = 80;
const heightOfImg = 80;
const antsNumber = 4;


function createElement(element, className, targetName){
    var element = document.createElement(element);
    element.className= className;
    document.querySelector(targetName).appendChild(element);
    return element
}

function createAnts(canvas,x,y,speed,dirLeft,dirTop){
    if (((x+widthOfImg+speed-2) >= widthOfCanvas)){
        dirLeft = -1;
    }
    else if(((y+widthOfImg+speed) >= widthOfCanvas)){
        dirTop= -1;
    }
    else if((x <= 0)){
        dirLeft = 1;
        
    }
    else if((y <= 0)){
        dirTop = 1;
        
    }
    let ctx = canvas.getContext('2d')
    let img = new Image();
    img.src = './assest/ant.svg';
    img.onload = function() {

        ctx.drawImage(img, x+(speed)*dirLeft, y+(speed)*dirTop, widthOfImg, heightOfImg);/*left,top,width,height*/
        };
    let values = [] 
    values = [x+(speed)*dirLeft, y+(speed)*dirTop,dirLeft,dirTop]
    return values;
}


function checkAntCollide(antsValues,num){
    for(let j=0;j<antsValues.length;j++){
        if(num!=j){
            let nextBoxTopValue = antsValues[j].PositionY;
            let nextBoxLeftValue =antsValues[j].PositionX; 
            if((Math.abs((antsValues[num].PositionY)-nextBoxTopValue))<50){
                if((Math.abs((antsValues[num].PositionX)-nextBoxLeftValue))<50){
                    antsValues[num].directionTop= -1;
                    antsValues[j].directionTop = 1;

                    antsValues[num].directionLeft = -1;   
                    antsValues[j].directionLeft = 1;
                }
            }      
        }
    }
}


function moveAnts(canvas,antsValues){
    let ctx = canvas.getContext('2d')

    setInterval(function(){

        for(let i=0; i<antsNumber;i++){
            let positionx= antsValues[i].PositionX
            let positiony= antsValues[i].PositionY
            let speed= antsValues[i].speed
            let dirLeft= antsValues[i].directionLeft
            let dirTop= antsValues[i].directionTop
            ctx.clearRect(0,0,canvas.width,canvas.height)
            let values = createAnts(canvas,positionx,positiony,speed,dirLeft,dirTop)
            antsValues[i].PositionX = values[0]
            antsValues[i].PositionY = values[1]
            antsValues[i].directionLeft = values[2]
            antsValues[i].directionTop= values[3]
            checkAntCollide(antsValues,i) 
        
            
        }



    },300)
}


function animateAnts(antsValues,canvas){
    for(let i=0;i<antsValues.length;i++){
        let speedValue = (Math.floor(Math.random()*20))
        while(speedValue<=5){
            speedValue = (Math.floor(Math.random()*20))
        }
        antsValues[i].directionTop = 1;
        antsValues[i].directionLeft = 1;
        antsValues[i].speed = speedValue
    } 
    moveAnts(canvas,antsValues)

}


function checkAntOverlap(firstantX,firstantY,nextantX,nextantY){
    if(Math.abs(firstantY-nextantY)<widthOfImg){
        if(Math.abs(firstantX-nextantX)<heightOfImg)
        return true;
    }
    else{
        return false;
    }
}


function numOfAnt(canvas){
    let antsValues = [];
    var ctx = canvas.getContext('2d')
    for(let i=0;i<antsNumber;i++){
        let values = {}
        let randomTopValue = Math.floor(Math.random()*1000)
        let randomLeftValue = Math.floor(Math.random()*1000)
        while(randomTopValue > (widthOfCanvas-widthOfImg)){
            randomTopValue =  Math.floor(Math.random()*1000)
        }
        while(randomLeftValue >(widthOfCanvas-widthOfImg)){
            randomLeftValue = Math.floor(Math.random()*1000)
        }
     
        values.PositionX = randomLeftValue;
        values.PositionY = randomTopValue;
        antsValues.push(values)
        let img = new Image();
        img.src = './assest/ant.svg';
        img.onload = function() {
            ctx.drawImage(img, randomLeftValue, randomTopValue, widthOfImg, heightOfImg);/*left,top,width,height*/
            };

    }
    return antsValues;  

}


function main(){
    
    let canvas = document.querySelector(".canvas")
    canvas.width = widthOfCanvas ;
    canvas.height = heightOfCanvas;
    canvas.style.border = '2px solid red';
    let antsValues = numOfAnt(canvas);
    animateAnts(antsValues,canvas);

}

main();

