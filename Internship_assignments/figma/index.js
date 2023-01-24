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
createHeading('h1','title','HTML INTERNSHIP ASSIGNMENTS','.main')

const design = 'https://www.figma.com/file/tDLFpLq1FlTox4VG3dG0Yo/figma__assignment?node-id=1%3A48&t=5m1dg6BoOBYE7Hed-1'
const pages = ['https://www.figma.com/proto/tDLFpLq1FlTox4VG3dG0Yo/figma__assignment?node-id=1%3A48&scaling=min-zoom&page-id=1%3A5',
                'https://www.figma.com/proto/tDLFpLq1FlTox4VG3dG0Yo/figma__assignment?node-id=1%3A240&scaling=min-zoom&page-id=1%3A5',
                'https://www.figma.com/proto/tDLFpLq1FlTox4VG3dG0Yo/figma__assignment?node-id=1%3A294&scaling=min-zoom&page-id=1%3A5']



for (let i = 0; i < 3; i++) {
    createEmptyDiv('div',`assign${i} assignment_wrapper`,'.main')
    createHeading('h2','sub_title',`Figma-${i+1}`,`.assign${i}`)
    createEmptyDiv('div',`btn_wrapper wrapper${i}`,`.assign${i}`)
    createAnchor(`link_assignment_demo${i}`,`${pages[i]}`, `.wrapper${i}`)
    createButton('btn', 'Demo',`.link_assignment_demo${i}`)
    createAnchor(`link_assignment_code${i}`,`${design}`,`.wrapper${i}`)
    createButton('btn', 'Design',`.link_assignment_code${i}`)
    
}
