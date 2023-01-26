
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

// profile image wrapper
createEmptyDiv('div','profile_img_container','.main-profile')
createAnchor('link_prof','profile.html','.profile_img_container')
createImg('../image/prof.jpg','profile_page_img','.link_prof')


createEmptyDiv('div','detail_container','.main-profile')
createHeading('h1','title_detail','Profile:','.detail_container')
createHeading('h2','detail','Name : Ukesh Thapa','.detail_container')
createHeading('h2','detail','Location : Bagdol, Lalitpur','.detail_container')
createHeading('h2','detail','Faculty : Computer Engineering','.detail_container')
createAnchor('github_link','https://github.com/UkeshThapa','.detail_container')
createButton('btn-profile','GitHub','.github_link')







