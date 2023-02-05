// Import the class
import {Game} from './game.js';


function drawImages(ctx,source,x,y,width,height){
    let img = new Image();
    img.src = source;
    img.onload = function (){
        ctx.drawImage(img,x,y,width,height)
    }

    
}

function gameStartPage(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height  = 650;
    canvas.style.border = "2px solid red";
    let src1 = "./assest/background-night.png";
    drawImages(ctx,src1,0,0,400,650)
    let src2 = "./assest/message.png"
    drawImages(ctx,src2,60,100,280,400)
    let gameStatus;
    canvas.addEventListener("click",function(e){
        gameStatus = "start"
        setUpEnvironment(gameStatus);
        
        
    })
    
}

//  function for set up Environment
function setUpEnvironment(gameStatus){
    let game = new Game(canvas);
    let frame = 0;
    game.checkKeydown()
    
    function animation(){  
        if(gameStatus == "start"){
            game.gameInitialization(frame)
            frame++;
            if((game.pipe.gameStatus == "end")||(game.bird.gameStatus == "end")) {
                gameStatus = "end"
            }
        }
        else if(gameStatus == 'end'){
            game.gameOver()
        }
        requestAnimationFrame (animation)
    }
    requestAnimationFrame(animation)
}

    
// Initialization of the function
function main(){
    gameStartPage()
    // window.onload = function (){
    //     setUpEnvironment();
    // }
}   


main();