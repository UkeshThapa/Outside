function createHeading(element,nameClass,text,targetId){
    var element = document.createElement(element);
    element.className= nameClass
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetId).appendChild(element);
}

function createEmptyDiv(element,nameClass,targetId){
    var element = document.createElement(element);
    element.className= nameClass
    document.querySelector(targetId).appendChild(element);
}

function createLabel(idName,text,targetId){
    var element = document.createElement('label');
    element.setAttribute("for", idName);
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetId).appendChild(element);
}
function createInput(idName,inputType,targetId){
    var element = document.createElement('INPUT');
    element.id = idName;
    element.setAttribute("type", inputType);    
    if (inputType == 'number'){
        element.setAttribute('min',0);
        element.setAttribute('max',20);
    }
    document.querySelector(targetId).appendChild(element);
}

function createButton(nameClass,txt,targetId){
    var element = document.createElement('Button');
    element.className = nameClass
    element.appendChild(document.createTextNode(txt));
    document.querySelector(targetId).appendChild(element);
}





createEmptyDiv('div','time_container','.main')

createEmptyDiv('div','switch_container','.time_container')
createButton('btn btn_cock stopwatch','Stopwatch','.switch_container')
createButton('btn btn_cock clock','Clock','.switch_container')

createEmptyDiv('div','watch_stopwatch','.time_container')

createEmptyDiv('div','stopwatch_container','.time_container')
createButton('btn btn_stopclock start','Start','.stopwatch_container')
createButton('btn btn_stopclock stop','Stop','.stopwatch_container')
createButton('btn btn_stopclock reset','Reset','.stopwatch_container')



// Clock
let clockHandler = document.querySelector('.clock'); 
let stopwatchHandler = document.querySelector('.stopwatch');
let start = document.querySelector(".start");
let stoper = document.querySelector(".stop");
let reset = document.querySelector(".reset");

// Initially show 
var div_time = document.getElementsByClassName("watch_stopwatch")[0];
div_time.innerText = "00:00:00"; 

start.disabled = true;
stoper.disabled = true;
reset.disabled = true;

let t ; 

function clock(){
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if (hh < 10) {
        hh = '0'+hh
    }
    if (mm < 10) {
        mm = '0'+mm
    }    

    if (ss < 10) {
        ss = '0'+ss
    }
    let time = hh + ":" + mm + ":" + ss
    
    document.getElementsByClassName("watch_stopwatch")[0].innerText = time; 
    t = setTimeout(function(){ clock() }, 1000);
}

// clock

clockHandler.addEventListener('click', function(){
    start.disabled = true;
    stoper.disabled = true;
    reset.disabled = true;
    clock();
})




let second = 0; /* second value  */
let mm = 0; /* minutes value  */
let hh = 0; /* hours value  */
let s ; 


function formate_num(value){
    if (value < 10){
        return value.toString().padStart(2, "0");
    }
    return value


}
function start_timer(){
    
    
    if (second > 59){
        mm+=1;          /* adding to minutes when greater than 59 value  */
        second = 0;
    }
    if (mm > 59){
        hh+=1;         /* adding to minutes when greater than 59 value  */
        mm = 0
    }

    let timer = formate_num(hh) + ":" + formate_num(mm) + ":" + formate_num(second)
    document.getElementsByClassName("watch_stopwatch")[0].innerText = timer; 
    s = setTimeout(function(){
        second++
        start_timer()
    },1000)

}




// Timer or stop watch
stopwatchHandler.addEventListener('click',function(){
    start.disabled = false;
    stoper.disabled = false;
    reset.disabled = false;
    clearTimeout(t);
    div_time.innerText = "00:00:00";
})

// start_timer()

start.addEventListener('click',function(){
    clockHandler.disabled =true;
    start_timer()
})

stoper.addEventListener('click',function(){
    clockHandler.disabled =false;
    clearInterval(s);
})

reset.addEventListener('click',function(){
    div_time.innerText = "00:00:00"; 
    second = 0;
    hh = 0;
    mm = 0;
    clearInterval(s);
})