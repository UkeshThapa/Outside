// global variable 
const widthCointainer = 400;
const heightCointainer = 700;
const widthOfImg =40;
const heightOfImg =100;
const Speed = 20
let leftPositionValue = (widthCointainer/2)-widthOfImg;
let score = 0;
let highscore = [];
let gameStatus = null;
let id = null



// function to create elements
function createElement(element, className, targetName){
    var element = document.createElement(element);
    element.className= className;
    document.querySelector(targetName).appendChild(element);
    return element;
}

// function detect the collision
function carCollision(obstacelWidth,obstacelHeight,userWidth){
    if(Math.abs(userWidth-obstacelWidth)<=widthOfImg){
        if(Math.abs(obstacelHeight-(heightCointainer-heightOfImg))<=heightOfImg){
            gameStatus = "end";
            highscore.push(score)
        }
    }

}

// function to calculate score 
function calculateScore(canvas){
    var ctx = canvas.getContext("2d");
    ctx.font = "40px Arial";
    ctx.fillStyle = "white"
    ctx.fillText(`Score : ${score}`, 10, 50);
}


// randomly generate the cars in the lane (level:easy)
function generateCar(canvas){
    var ctx = canvas.getContext("2d");
    let position = [60,180,280];
    let index = Math.floor(Math.random()*position.length);
    let widthPosition = position[index];
    let carPosition  = -20;
    // generate speed randomly
    let carSpeed = Math.floor(Math.random()*3);
    while(carSpeed==0){
        carSpeed = Math.floor(Math.random()*3);
    }
    moveUserCar();

    function animateCar(){
        calculateScore(canvas);
        carCollision(widthPosition,carPosition,leftPositionValue);
        let heightOfCar = carPosition + carSpeed;
        
        if(heightOfCar>=heightCointainer){
            heightOfCar  = 0;
            carPosition = -20;
            index = Math.floor(Math.random()*position.length);
            widthPosition = position[index];           
            carSpeed = Math.floor(Math.random()*3);
            while(carSpeed==0){
                carSpeed = Math.floor(Math.random()*3);
            }   
            score +=1;        
        }

        // background
        drawImage(canvas,0,0,widthCointainer,heightCointainer,"./assest/design_track.svg");        
        carPosition = heightOfCar + carSpeed;     
        drawImage(canvas,widthPosition, carPosition,widthOfImg, heightOfImg,`./assest/car${index}.png`);
        // user car
        drawImage(canvas,leftPositionValue, heightCointainer-heightOfImg,widthOfImg, heightOfImg,"./assest/user1.png");
        id = requestAnimationFrame(animateCar);
    }    
    requestAnimationFrame(animateCar);

}

function drawImage(canvas,left,top,width,height,source){
    var ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = source
    img.onload = function() {
        ctx.drawImage(img, left,top,width,height); /*(left,top,width,height)*/
    }; 

}



// function to move the cars
function moveUserCar(){
    document.addEventListener("keydown",function(event){
        var name = event.key;
        if(name=="ArrowLeft"){
            if(leftPositionValue<=30){                
                leftPositionValue = 30;
            }
            else{
                leftPositionValue = leftPositionValue-Speed;
            }
        }
        else if (name=="ArrowRight"){
            if(leftPositionValue>=widthCointainer-100){
                leftPositionValue = widthCointainer-100;
            }    
            else{
                leftPositionValue = leftPositionValue+Speed;               
            }
        }
    })


}


function gameOver(canvas){
    cancelAnimationFrame(id);
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "./assest/design_track.svg"
    img.onload = function() {
        ctx.drawImage(img, 0,0,widthCointainer,heightCointainer); /*(left,top,width,height)*/
        ctx.font = "40px Arial";   
        ctx.fillStyle = "white"   
        ctx.fillText(`Your Score : ${score}`,75,200);
        ctx.fillText(`Highest Score : ${Math.max(...highscore)}`,40,290);
        ctx.fillStyle = "blue";   
        ctx.fillRect(105,330,160,80);
        ctx.font = "30px Arial";   
        ctx.fillStyle = "white"   
        ctx.fillText(`RESTART`,120,380);

    }; 
    canvas.addEventListener("click",function(e){
        let x = e.layerX - canvas.offsetLeft;
        let y = e.layerY  - canvas.offsetTop;
        if (x>=105 && x<=265 && y>=330 && y<=410){
            gameStatus = "start";
        }  
    })
    
}


function initializeGame(canvas){
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "./assest/design_track.svg";
    img.onload = function() {
        ctx.drawImage(img, 0,0,widthCointainer,heightCointainer); /*(left,top,width,height)*/
        ctx.fillStyle = "red"   
        ctx.fillRect(105,330,160,80)
        ctx.font = "40px Arial";   
        ctx.fillStyle = "white"   
        ctx.fillText(`START`,120,380);

    }; 
    canvas.addEventListener("click",function(e){
        let x = e.layerX - canvas.offsetLeft;
        let y = e.layerY  - canvas.offsetTop;
        if (x>=105 && x<=265 && y>=330 && y<=410){
            gameStatus = "start";
            setUpEnvironment(canvas);
        }  
    })

}


function setUpEnvironment(canvas){
    function gameInitialization(){
        if(gameStatus=="start"){
            score = 0;
            gameStatus = generateCar(canvas);
        }
        else if (gameStatus == "end"){
            gameOver(canvas);
        }
        requestAnimationFrame(gameInitialization);
    }
    requestAnimationFrame(gameInitialization);

}

// move the object with the arrow left and arrow right
function main(){
    let canvas = document.querySelector(".canvas");
    canvas.width = widthCointainer; 
    canvas.height = heightCointainer;
    gameStatus = initializeGame(canvas)




}


main();
