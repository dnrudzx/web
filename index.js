const article_Page = document.querySelector('.article');
const navAbout = document.querySelector('#about');
const navskill = document.querySelector('#skill');
const navproject = document.querySelector('#project');
const about = "articles/about.html";
const skill = "articles/skill.html";
const project = "articles/project.html";

function setDefaultPage() {
    article_Page.innerHTML = `<object type="text/html" data=${about} class="article"></object>`;
}

function handleAbout(event){
    event.preventDefault();
    article_Page.innerHTML = `<object type="text/html" data=${about} class="article"></object>`;
}

function handleSkill(event){
    event.preventDefault();
    article_Page.innerHTML = `<object type="text/html" data=${skill} class="article"></object>`;
}

function handleProject(event){
    event.preventDefault();
    article_Page.innerHTML = `<object type="text/html" data=${project} class="article"></object>`;
}

function init() {
    setDefaultPage();
    navAbout.addEventListener('click',handleAbout);
    navskill.addEventListener('click',handleSkill);
    navproject.addEventListener('click',handleProject);
}

init();