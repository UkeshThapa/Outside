
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
createHeading('h1','title','OUTSIDE INTERNSHIP ASSIGNMENTS','.main')

// profile image wrapper
createEmptyDiv('div','prof_img_container','.main')
createAnchor('link_prof','profile.html','.prof_img_container')
createImg('./image/prof.jpg','profile','.link_prof')


const Assignments = ["CSS ASSIGNMENTS", "HTML ASSIGNMENTS", "FIGMA ASSIGNMENTS","SCSS ASSIGNMENTS","BOOTSTRAP ASSIGNMENT","JavaScript ASSIGNMENT","FINAL FRONTEND ASSIGNMENT"];
const links = ['CSS','HTML','figma','SCSS','Bootstrap5','JavaScript','Final_project(Front_end)']


for (let i = 0; i < 7; i++) {
    createEmptyDiv('div',`assign${i} assignment_wrapper`,'.main')
    createHeading('h3','sub_title',Assignments[i],`.assign${i}`)
    createAnchor(`link_assignment${i}`,`Internship_assignments/${links[i]}/index.html`,`.assign${i}`)
    createButton('btn', 'see more..',`.link_assignment${i}`)
}

