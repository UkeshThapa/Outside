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
createHeading('h1','title','Java Script INTERNSHIP ASSIGNMENTS','.main')

const link = 'https://github.com/UkeshThapa/Outside/tree/master/Internship_assignments/JavaScript/'

for (let i = 0; i < 8; i++) {
    createEmptyDiv('div',`assign${i} assignment_wrapper`,'.main')
    createHeading('h2','sub_title',`Assignment-${i+1}`,`.assign${i}`)
    createEmptyDiv('div',`btn_wrapper wrapper${i}`,`.assign${i}`)
    if ((i+1) != 2 ){
        createAnchor(`link_assignment_demo${i}`,`assignment${i+1}/index.html`, `.wrapper${i}`)
        createButton('btn', 'Demo',`.link_assignment_demo${i}`)
        createAnchor(`link_assignment_code${i}`,`${link}assignment${i+1}`,`.wrapper${i}`)
        createButton('btn', 'Code',`.link_assignment_code${i}`)
    }
    else{
        createAnchor(`link_assignment_demo${i}`,`assignment${i+1}/index.html`, `.wrapper${i}`)
        createButton('btn', 'see more..',`.link_assignment_demo${i}`)
    }
    
}
