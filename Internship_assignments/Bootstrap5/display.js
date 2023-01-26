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

function createImg(source,nameClass,targetId){
    var element = document.createElement('img');
    element.src = source
    element.className = nameClass
    document.querySelector(targetId).appendChild(element);
}

function createButton(nameClass,txt,targetId){
    var element = document.createElement('Button');
    element.className = nameClass
    element.appendChild(document.createTextNode(txt));
    document.querySelector(targetId).appendChild(element);
}


function createAnchor(nameClass,link,targetId){
    var element = document.createElement('a');
    element.className = nameClass
    element.href = link
    element.target ='_blank'
    document.querySelector(targetId).appendChild(element);
}


// Index frontpage

//creating H1 tag 
createHeading('h1','title','Final Project (Frontend)','.main')

const link = 'https://github.com/UkeshThapa/Outside/tree/master/Internship_assignments/Final_project(Front_end)'
const demo  = 'https://ukeshthapa.github.io/Outside/Internship_assignments/Final_project(Front_end)/dist/index.html'
for (let i = 0; i < 1; i++) {
    createEmptyDiv('div',`assign${i} assignment_wrapper`,'.main')
    createHeading('h2','sub_title',`Final Project`,`.assign${i}`)
    createEmptyDiv('div',`btn_wrapper wrapper${i}`,`.assign${i}`)
    createAnchor(`link_assignment_demo${i}`,`${demo}`, `.wrapper${i}`)
    createButton('btn', 'Demo',`.link_assignment_demo${i}`)
    createAnchor(`link_assignment_code${i}`,`${link}`,`.wrapper${i}`)
    createButton('btn', 'Code',`.link_assignment_code${i}`)
    
}
