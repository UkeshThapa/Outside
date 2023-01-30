const widthBox = 100;
const heightBox = 100;
const numBox = 3 ;
const widthCointainer =  500;
const heightCointainer =  500;



function createElement(element, className, targetName){
    var element = document.createElement(element);
    element.className= className
    document.querySelector(targetName).appendChild(element);
    return element
}





function createBoxes(){

    for(let i=0;i<numBox;i++){
        createElement('div',`boxes boxes${i+1}`,'.container')
    }
    let boxesValue =[]

    let boxes = document.getElementsByClassName('boxes');
    for(let i=0;i<boxes.length;i++){
        let values = {}
        boxes[i].style.position = "absolute";
        boxes[i].style.width = widthBox+'px';
        boxes[i].style.height = heightBox+'px';
        
        let randomColor = ['red','blue','green']
        boxes[i].style.backgroundColor = randomColor[Math.floor(Math.random()*randomColor.length)];

        let randomTopValue = Math.floor(Math.random()*1000)
        let randomLeftValue = Math.floor(Math.random()*1000)

        while(randomTopValue > (widthCointainer-widthBox)){
            randomTopValue =  Math.floor(Math.random()*1000)
            
        }
        while(randomLeftValue >(widthCointainer-widthBox)){
            randomLeftValue = Math.floor(Math.random()*1000)
        }
        
        boxes[i].style.top =  randomTopValue+"px";
        boxes[i].style.left = randomLeftValue+"px";  
        values.PositionX = randomLeftValue;
        values.PositionY = randomTopValue ;
        boxesValue.push(values);    
    }
    return boxesValue;
}   




function moveBoxes(boxes,element){
    if (((element.offsetLeft+(widthBox)+boxes['speed']) >= widthCointainer)){
        boxes['directionLeft'] = -1;
    }
    else if(((element.offsetTop+widthBox+boxes['speed']) >= widthCointainer)){
        boxes['directionTop'] = -1;
    }
    else if(((element.offsetLeft) <= 0)){
        boxes['directionLeft'] = 1;
        
    }
    else if(((element.offsetTop) <= 0)){
        boxes['directionTop'] = 1;
        
    }
    valueTop = element.offsetTop+(boxes['speed'])*boxes['directionTop']
    valueLeft = element.offsetLeft+(boxes['speed'])*boxes['directionLeft']
    element.style.top = valueTop + 'px'
    element.style.left = valueLeft + 'px'
        

}


function checkBoxesCollide(boxes,boxElement,num){
    for(let j=0;j<boxes.length;j++){
        if(num!=j){
            let nextBoxTopValue = boxElement[j].offsetTop;
            let nextBoxLeftValue = boxElement[j].offsetLeft; 
            if((Math.abs((boxElement[num].offsetTop)-nextBoxTopValue))<50){
                if((Math.abs((boxElement[num].offsetLeft)-nextBoxLeftValue))<50){
                    boxes[num]['directionTop'] = -1;
                    boxes[j]['directionTop'] = 1;

                    boxes[num]['directionLeft'] = -1;   
                    boxes[j]['directionLeft'] = 1;
                }
            }      
        }
    }
}



function animateBoxes(boxes){
    for(let i=0;i<boxes.length;i++){
        let speedValue = (Math.floor(Math.random()*20))
        while(speedValue<=0){
            speedValue = (Math.floor(Math.random()*20))
        }
        boxes[i].speed = speedValue
        boxes[i].directionTop = 1;
        boxes[i].directionLeft = 1;
    } 
     boxElement = document.getElementsByClassName('boxes')
    console.log(boxes) 
    setInterval(function (){
        for(let i=0; i<boxes.length;i++){
            
            moveBoxes(boxes[i],boxElement[i]);
            checkBoxesCollide(boxes,boxElement,i);

        }        
    },100)
}




function main(){
    
    // create div and desgin

    let containerForboxes = createElement('div','container','.main');
    containerForboxes.style.width = widthCointainer +'px';
    containerForboxes.style.height = heightCointainer +'px';
    
    //  create n number of boxess
    let boxes = createBoxes();

    // animation of the boxes;
    animateBoxes(boxes);

}

// initialize function 
main();