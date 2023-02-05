
function createButton(nameClass,txt,targetId){
  var element = document.createElement('Button');
  element.className = nameClass
  element.appendChild(document.createTextNode(txt));
  document.querySelector(targetId).appendChild(element);
}

function createEmptyDiv(element,nameClass,targetId){
  var element = document.createElement(element);
  element.className= nameClass
  document.querySelector(targetId).appendChild(element);
}



// automatic sliding in every 2 second
function autoCarousel(){
    var i;
    var x = document.getElementsByClassName("image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex-1].style.display = "block";  
    time = setTimeout(autoCarousel, 3000); 

}

// indicators
function indicator(){
    let children = document.getElementsByClassName("image");
        for (let i = 0;i < children.length;i++){
            createButton('btnpage',i+1,'.carousel_num')
            
        }

}



function plusDivs(n) {
  showDivs(slideIndex += n);
}
  
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("image");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  x[slideIndex-1].style.display = "block";  
}

var myIndex = 0;
let time;

createEmptyDiv('div','btn_warpper','.main')
createButton('btn left_btn','< Prev','.btn_warpper' )
createEmptyDiv('div','carousel_num','.btn_warpper')
createButton('btn right_btn','Next >','.btn_warpper' )
autoCarousel();
indicator()

var slideIndex = 1;
showDivs(slideIndex);

let prev = document.querySelector('.left_btn')
let next = document.querySelector('.right_btn')

prev.addEventListener('click',function(){
    plusDivs(-1)

})

next.addEventListener('click',function(){
    plusDivs(1)
})

var dom = document.getElementsByClassName("btnpage")
for(i = 0; i < dom.length; i++){
    let a= dom[i]
    a.addEventListener('click',function(){

        currentDiv(a.textContent)
    })
  }

