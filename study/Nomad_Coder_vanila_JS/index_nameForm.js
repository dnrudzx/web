// HTML 객체
const nameForm = document.querySelector('.nameForm');
const nameInput = nameForm.querySelector('.nameInput');
const nameH4 = nameForm.querySelector('.nameFix');
const nameButton = nameForm.querySelector('.nameReset');
// CLASS
const NOTVIEW = `notView`;
// localStorage
const USER = `User`

function handleSubmit(event){
    event.preventDefault();
    const User = nameInput.value;
    localStorage.setItem(USER, User);
    nameInput.classList.add(NOTVIEW);
    viewName();
}

function viewInput(){
    nameInput.classList.remove(NOTVIEW);
    nameForm.addEventListener('submit', handleSubmit);
}

function handleClick(event){
    event.preventDefault();
    nameInput.value = null;
    localStorage.setItem(USER, 'none');
    nameH4.classList.add(NOTVIEW);
    nameButton.classList.add(NOTVIEW);
    viewInput();
}

function viewName(){
    const User = localStorage.getItem(USER);
    nameH4.classList.remove(NOTVIEW);
    nameH4.innerText = `Hello! ${User}`;

    nameButton.classList.remove(NOTVIEW);
    nameForm.addEventListener("click", handleClick);
}

function init(){
    const currentUser = localStorage.getItem(USER);
    if(currentUser === null || currentUser === 'none'){
        viewInput();
    }else{
        viewName();
    }
}

init();