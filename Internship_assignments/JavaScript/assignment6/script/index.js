/*

To-do list 

// 1. create the box;
// 2. move the car and check the wall collision;
// 3. detect the wall collision with; 
// 4. randomly car fall (level: easy) one car at a time in each coordinate;
// 5. detect the collision with other car
// 6. calculate the score; 
// 7. track the score and set high score according to time;
. 

*/



// global variable 
const widthCointainer = 600;
const heightCointainer = 1000;
const widthOfImg =80;
const heightOfImg =200;
const Speed = 40
let leftPositionValue = (widthCointainer/2)-widthOfImg;
let score = 0;
let highscore = [];
let gameStatus = "start";
let id = null
// function to create elements
function createElement(element, className, targetName){
    var element = document.createElement(element);
    element.className= className;
    document.querySelector(targetName).appendChild(element);
    return element;
}

// function detect the collision
function carCollision(canvas,obstacelWidth,obstacelHeight,userWidth){
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
    ctx.font = "50px Arial";
    ctx.fillStyle = "white"
    ctx.fillText(`Score : ${score}`, 10, 50);
}


// randomly generate the cars in the lane (level:easy)
function generateCar(canvas){
    var ctx = canvas.getContext("2d");
    let position = [75,250,410];
    let index = Math.floor(Math.random()*position.length)
    let widthPosition = position[index];
    let carPosition  = -20;
    // generate speed randomly
    let carSpeed = Math.floor(Math.random()*3);
    while(carSpeed==0){
        carSpeed = Math.floor(Math.random()*3);
    }
    moveUserCar()

    function animateCar(){
        calculateScore(canvas);
        carCollision(canvas,widthPosition,carPosition,leftPositionValue)
        let heightOfCar = carPosition + carSpeed;
        if(heightOfCar>=heightCointainer){
            heightOfCar  = 0;
            carPosition = -20;
            index = Math.floor(Math.random()*position.length)
            widthPosition = position[index];           
            carSpeed = Math.floor(Math.random()*3)
            while(carSpeed==0){
                carSpeed = Math.floor(Math.random()*3)
            }   
            score +=1;        
        }
        // background
        drawImage(canvas,0,0,widthCointainer,heightCointainer,"./assest/design_track.svg")        
        carPosition = heightOfCar + carSpeed;     
        drawImage(canvas,widthPosition, carPosition,widthOfImg, heightOfImg,`./assest/car${index}.png`);
        // user car
        drawImage(canvas,leftPositionValue, heightCointainer-heightOfImg,widthOfImg, heightOfImg,"./assest/user1.png");
        console.log(score)
        id = requestAnimationFrame(animateCar)
    }    
    requestAnimationFrame(animateCar)

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
            if(leftPositionValue<=40){                
                leftPositionValue = 40;
            }
            else{
                leftPositionValue = leftPositionValue-Speed
            }
        }
        else if (name=="ArrowRight"){
            if(leftPositionValue>=widthCointainer-160){
                leftPositionValue = widthCointainer-160;
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
        ctx.font = "60px Arial";   
        ctx.fillStyle = "white"   
        ctx.fillText(`Your Score : ${score}`,95,300)
        ctx.fillText(`Highest Score : ${Math.max(...highscore)}`,55,460)
        ctx.fillStyle = "blue"   
        ctx.fillRect(205,530,150,80)
        ctx.font = "40px Arial";   
        ctx.fillStyle = "white"   
        ctx.fillText(`START`,216,580)

    }; 
    canvas.addEventListener("click",function(e){
        let x = e.layerX - canvas.offsetLeft;
        let y = e.layerY  - canvas.offsetTop;
        if (x>=205 && x<=355 && y>=530 && y<=610){
            gameStatus = "start"
        }  
    })
    
}


function setUpEnvironment(canvas){
    function gameInitialization(){

        if(gameStatus=="start"){
            score = 0
            gameStatus = generateCar(canvas);
        }
        // else if(gameStatus == "restart"){
            
        //     generateCar(canvas)
        // }
        else if (gameStatus == "end"){
            gameOver(canvas);
        }
        requestAnimationFrame(gameInitialization)

    }
    requestAnimationFrame(gameInitialization)

}

// move the object with the arrow left and arrow right
function main(){
    let canvas = document.querySelector(".canvas");
    canvas.width = widthCointainer; 
    canvas.height = heightCointainer;
    setUpEnvironment(canvas)



}


main();
