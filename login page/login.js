const box = document.querySelector('.box');
const loginform = document.querySelector('.register-link');
const registerform = document.querySelector('.login-link');
const navbutton = document.querySelector('.navbutton');
const iconclose = document.querySelector('.icon-close');


loginform.addEventListener('click', ()=> {
    box.classList.add('active');
});

registerform.addEventListener('click', ()=> {
    box.classList.remove('active');
});


navbutton.addEventListener('click', ()=> {
    box.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    box.classList.remove('active-popup');
});