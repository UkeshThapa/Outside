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

createHeading('h1','title','Assignment-2','.main')

createEmptyDiv('form','container_div','.main')
createEmptyDiv('span','error_message','.container_div')

createHeading('h1','title','Password Generator','.container_div')

// number input 
createLabel('number_length','Length of Character: ','.container_div')
createInput('number_length','number','.container_div')
createHeading('h4','title','Select Combination:','.container_div')

// Check Box
createInput('select1','checkbox','.container_div')
createLabel('select1','UpperCase','.container_div')
createEmptyDiv('br','','.container_div')
createInput('select2','checkbox','.container_div')
createLabel('select2','LowerCase','.container_div')
createEmptyDiv('br','','.container_div')
createInput('select3','checkbox','.container_div')
createLabel('select3','Numbers','.container_div')
createEmptyDiv('br','','.container_div')
createInput('select4','checkbox','.container_div')
createLabel('select4','Special Character','.container_div')
createEmptyDiv('br','','.container_div')
createButton('btn btn_generator','Generate password','.container_div')
createHeading('h2','result','Result : ','.container_div')
createEmptyDiv('span','generated_password','.result')


let number = document.querySelector('#number_length')
let button = document.querySelector('.btn')
let upper = document.querySelector('#select1')
let lower = document.querySelector('#select2')
let numSelect = document.querySelector('#select3')
let specialChar = document.querySelector('#select4')
let generated_password = document.querySelector('.generated_password')
let err_msg = document.querySelector('.error_message')

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrst";
const num = "0123456789"
const specialChars = '!@#$%^&*()_+-{}|:"<>?\/][='

button.addEventListener('click',function(e){
    e.preventDefault();
    let char = '';
    var length = Number(number.value);
    if (upper.checked){
        char += upperChars
    }
    if(lower.checked){
        char += lowerChars
    }
    if(numSelect.checked){
        char += num
    }
    if(specialChar.checked){
        char += specialChars
    }
// error

    if ((!upper.checked)&&(!lower.checked)&&(!numSelect.checked)&&(!specialChar.checked)&&(length == 0)){
        err_msg.innerText = "error : empty values"
        let t = setTimeout(()=>{err_msg.innerText = ""},4000)   
        clearTimeout(t)  
    }
    else if(length<8){
        err_msg.innerText = "error : must be min 8 length chars"
        let t = setTimeout(()=>{err_msg.innerText = ""},4000)   
        clearTimeout(t)  

    } 
    else if((!upper.checked)&&(!lower.checked)&&(!numSelect.checked)&&(!specialChar.checked)&&(length > 0)){
        err_msg.innerText = "error : select the combination"
        let t = setTimeout(()=>{err_msg.innerText = ""},4000)   
        clearTimeout(t)  

    } 

    
    let result = "";
    for(let i=0; i<length; i++){
        result +=char.charAt(Math.floor(Math.random()* char.length));
    }
    generated_password.innerText = result

})

