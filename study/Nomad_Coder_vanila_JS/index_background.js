const body = document.querySelector('body');

const IMG_NUMBER = 3;

function randomNumber() {
    return Math.floor(1 + Math.random() * IMG_NUMBER);
}

function handleImgLoad(event){
    console.log('finish')
}

function paintIMG(number){
    const img = new Image();
    img.src = `imgs/${number}.jpg`;
    img.classList.add('bgimg')
    body.appendChild(img);
}

function init() {
    const img_number = randomNumber();
    paintIMG(img_number);
}

init();