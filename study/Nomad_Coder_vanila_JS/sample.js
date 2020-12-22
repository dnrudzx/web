// HTML 객체
const nameForm = document.querySelector('.nameForm');
const nameInput = nameForm.querySelector('.nameInput');
const nameH4 = nameForm.querySelector('.nameFix');
const nameButton = nameForm.querySelector('.nameReset');
// CLASS
const NOTVIEW = `notView`;
// localStorage
const USER = `User`



function init(){
    const currentUser = localStorage.getItem(USER);
    if(currentUser === null || currentUser === 'none'){
        // 유저가 없는 상태
        viewInput();
    }else{
        // 유저가 있는 상태
        viewName();
    }
}

init();