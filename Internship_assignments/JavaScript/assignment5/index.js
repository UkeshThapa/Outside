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

function animateAnts(antsValues,canvas){
    moveBoxes()
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
        // debugger
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
    // console.log(antsValues)

}

main();

