const menuBtn =document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');


menuBtn.addEventListener('click',toggleMenu);

let showMenu = false;

function toggleMenu(){
    if(!showMenu){
        burger.classList.add('open');

        showMenu = true;
    }else{
        burger.classList.remove('open');

        showMenu = false;
    }
}